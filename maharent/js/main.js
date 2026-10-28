// Scripts principales de MAHARent: interacciones comunes de la interfaz.
(function () {
  'use strict';

  // Mostrar / ocultar contraseña: <button data-toggle-password="id-del-input">
  document.querySelectorAll('[data-toggle-password]').forEach(function (button) {
    const input = document.getElementById(button.dataset.togglePassword);
    const icon = button.querySelector('.icon');
    if (!input) return;

    button.addEventListener('click', function () {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      button.setAttribute('aria-label', isHidden ? 'Ocultar contraseña' : 'Mostrar contraseña');
      if (icon) icon.textContent = isHidden ? 'visibility_off' : 'visibility';
    });
  });

  // Menú móvil: <button data-nav-toggle aria-controls="id-del-nav">
  document.querySelectorAll('[data-nav-toggle]').forEach(function (button) {
    const nav = document.getElementById(button.getAttribute('aria-controls'));
    if (!nav) return;

    function setOpen(open) {
      nav.classList.toggle('nav--open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }

    button.addEventListener('click', function () {
      setOpen(!nav.classList.contains('nav--open'));
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });
  });

  // Formularios de demostración: evitan el envío real y muestran el mensaje de confirmación
  document.querySelectorAll('[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (status) status.hidden = false;
    });
  });

  // Filtro de listados: <div data-filter-group="id-lista"> con botones data-filter y elementos data-category
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    const list = document.getElementById(group.dataset.filterGroup);
    if (!list) return;
    const buttons = group.querySelectorAll('[data-filter]');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        buttons.forEach(function (other) {
          const active = other === button;
          other.setAttribute('aria-pressed', String(active));
          other.classList.toggle('view-toggle__button--active', active);
        });
        list.querySelectorAll('[data-category]').forEach(function (item) {
          item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
        });
      });
    });
  });

  // Detalle de vehículo: galería con miniaturas <button data-gallery-thumb> y contador
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    const image = gallery.querySelector('[data-gallery-image]');
    const counter = gallery.querySelector('[data-gallery-counter]');
    const thumbs = Array.from(gallery.querySelectorAll('[data-gallery-thumb]'));
    if (!image) return;

    thumbs.forEach(function (thumb, index) {
      thumb.addEventListener('click', function () {
        const thumbImage = thumb.querySelector('img');
        thumbs.forEach(function (other) {
          const active = other === thumb;
          other.classList.toggle('gallery__thumb--active', active);
          other.setAttribute('aria-pressed', String(active));
        });
        if (counter) counter.textContent = (index + 1) + ' / ' + thumbs.length + ' fotos';
        image.classList.add('gallery__image--busy');
        image.src = thumb.dataset.gallerySrc || thumbImage.src;
        image.alt = thumb.dataset.galleryAlt || thumbImage.alt;
        setTimeout(function () {
          image.classList.remove('gallery__image--busy');
        }, 150);
      });
    });
  });

  // Desplazamiento suave a una sección: <button data-scroll-to="id">
  document.querySelectorAll('[data-scroll-to]').forEach(function (button) {
    button.addEventListener('click', function () {
      const target = document.getElementById(button.dataset.scrollTo);
      if (!target) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  // Favorito: <button data-fav-toggle aria-pressed> con <span data-fav-label>
  document.querySelectorAll('[data-fav-toggle]').forEach(function (button) {
    const label = button.querySelector('[data-fav-label]');
    button.addEventListener('click', function () {
      const pressed = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(pressed));
      if (label) label.textContent = pressed ? 'En favoritos' : 'Añadir a favoritos';
    });
  });

  // Solicitud de renting (demostración): <button data-request-cta data-request-message>
  document.querySelectorAll('[data-request-cta]').forEach(function (button) {
    button.addEventListener('click', function () {
      window.alert(button.dataset.requestMessage || 'Solicitud iniciada.');
    });
  });

  // Visor 3D simulado: <section data-viewer> con data-viewer-stage, data-viewer-image y botones data-viewer-action
  document.querySelectorAll('[data-viewer]').forEach(function (viewer) {
    const stage = viewer.querySelector('[data-viewer-stage]');
    const image = viewer.querySelector('[data-viewer-image]');
    const angleLabel = viewer.querySelector('[data-viewer-angle]');
    const interiorLabel = viewer.querySelector('[data-viewer-interior-label]');
    const interiorButton = viewer.querySelector('[data-viewer-action="interior"]');
    const swatches = Array.from(viewer.querySelectorAll('[data-viewer-action="color"]'));
    if (!stage || !image) return;

    const angles = [
      'Vista Frontal 0°', 'Ángulo Tres Cuartos 45°', 'Perfil Lateral 90°', 'Ángulo Trasero 135°',
      'Vista Trasera 180°', 'Ángulo Trasero 225°', 'Perfil Lateral 270°', 'Ángulo Frontal 315°'
    ];
    let zoom = 1;
    let rotation = 0;
    let interior = false;

    function render() {
      stage.style.setProperty('--viewer-zoom', zoom);
      stage.style.setProperty('--viewer-rotation', rotation + 'deg');
      if (angleLabel) {
        const index = Math.round((((rotation % 360) + 360) % 360) / 45) % 8;
        angleLabel.textContent = interior ? 'Cockpit Interior Panorámico' : 'Perspectiva: ' + angles[index];
      }
      if (interiorLabel) interiorLabel.textContent = interior ? 'Ver Exterior' : 'Ver Interior';
      if (interiorButton) interiorButton.setAttribute('aria-pressed', String(interior));
    }

    function flash(callback) {
      image.classList.add('viewer__image--busy');
      setTimeout(function () {
        if (callback) callback();
        image.classList.remove('viewer__image--busy');
      }, 200);
    }

    function toggleInterior() {
      flash(function () {
        interior = !interior;
        if (interior) {
          rotation = 0;
          zoom = 1.1;
        } else {
          zoom = 1;
        }
        render();
      });
    }

    viewer.addEventListener('click', function (event) {
      const button = event.target.closest('[data-viewer-action]');
      if (!button) return;
      const value = Number(button.dataset.viewerValue);

      switch (button.dataset.viewerAction) {
        case 'rotate':
          if (interior) interior = false;
          rotation += value;
          break;
        case 'zoom':
          zoom = Math.min(Math.max(0.7, zoom + value), 1.6);
          break;
        case 'reset':
          zoom = 1;
          rotation = 0;
          interior = false;
          break;
        case 'color':
          if (interior) interior = false;
          swatches.forEach(function (swatch) {
            swatch.setAttribute('aria-pressed', String(swatch === button));
          });
          flash();
          break;
        case 'interior':
          toggleInterior();
          return;
      }
      render();
    });

    render();
  });

  // Marketplace: cambio de vista <div data-view-toggle="id-lista"> con botones data-view="grid|list"
  document.querySelectorAll('[data-view-toggle]').forEach(function (group) {
    const list = document.getElementById(group.dataset.viewToggle);
    if (!list) return;
    const buttons = group.querySelectorAll('[data-view]');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const isList = button.dataset.view === 'list';
        buttons.forEach(function (other) {
          const active = other === button;
          other.setAttribute('aria-pressed', String(active));
          other.classList.toggle('view-toggle__button--active', active);
        });
        list.classList.toggle('results__list--list', isList);
        list.querySelectorAll('.vehicle-card').forEach(function (card) {
          card.classList.toggle('vehicle-card--list', isList);
        });
      });
    });
  });

  // Marketplace: favorito en tarjeta <button data-favorite aria-pressed>
  document.querySelectorAll('[data-favorite]').forEach(function (button) {
    button.addEventListener('click', function () {
      button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    });
  });

  // Marketplace: valor de un rango en un <output>: <input type="range" data-range-output="id" data-range-template="Hasta {value} €">
  document.querySelectorAll('[data-range-output]').forEach(function (range) {
    const output = document.getElementById(range.dataset.rangeOutput);
    if (!output) return;
    const template = range.dataset.rangeTemplate || '{value}';

    function sync() {
      output.textContent = template.replace('{value}', range.value);
    }

    range.addEventListener('input', sync);
    if (range.form) range.form.addEventListener('reset', function () { setTimeout(sync, 0); });
  });

  // Marketplace: panel de filtros plegable en móvil: <button data-filters-toggle aria-controls="id">
  document.querySelectorAll('[data-filters-toggle]').forEach(function (button) {
    const body = document.getElementById(button.getAttribute('aria-controls'));
    if (!body) return;

    button.addEventListener('click', function () {
      const open = body.classList.toggle('filters__body--open');
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Ocultar filtros' : 'Mostrar filtros');
    });
  });

  // Marketplace: chips de selección única <ul data-chip-group> y sugerencias <button data-fill-input="id-input">
  document.querySelectorAll('[data-chip-group] .chip').forEach(function (chip, _index, chips) {
    chip.addEventListener('click', function () {
      chips.forEach(function (other) {
        other.setAttribute('aria-pressed', String(other === chip));
      });
    });
  });

  document.querySelectorAll('[data-fill-input]').forEach(function (button) {
    button.addEventListener('click', function () {
      const input = document.getElementById(button.dataset.fillInput);
      if (!input) return;
      input.value = button.textContent.trim().replace(/\s+/g, ' ');
      input.focus();
    });
  });

  // Panel de empresa (dashboard.html): <div data-dashboard>. Avisos <div data-toast-region>, botones data-toast,
  // desplegables data-dropdown-toggle, filtros data-fleet-filter, modales <dialog> con data-modal-open / data-modal-close
  (function () {
    if (!document.querySelector('[data-dashboard]')) return;

    const STATUS_MODIFIERS = { 'Disponible': 'available', 'En renting': 'renting', 'Publicado': 'published', 'Borrador': 'draft' };
    const TOAST_ICONS = { info: 'info', success: 'check_circle', warn: 'warning' };
    const toastRegion = document.querySelector('[data-toast-region]');
    const rowMenu = document.getElementById('row-menu');
    const vehicleModal = document.getElementById('modal-vehicle');
    const vehicleForm = document.getElementById('vehicle-form');
    const tableBody = document.querySelector('[data-vehicle-body]');
    let editingRow = null;
    let menuRow = null;
    let requestButton = null;

    function createIcon(name, size) {
      const icon = document.createElement('span');
      icon.className = 'icon icon--' + size;
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = name;
      return icon;
    }

    function showToast(message, type) {
      const kind = type || 'info';
      const toast = document.createElement('p');
      toast.className = 'toast toast--' + kind;
      const text = document.createElement('span');
      text.textContent = message;
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'toast__close';
      close.setAttribute('aria-label', 'Cerrar aviso');
      close.appendChild(createIcon('close', 'sm'));

      function dismiss() {
        toast.classList.remove('toast--visible');
        setTimeout(function () { toast.remove(); }, 300);
      }

      close.addEventListener('click', dismiss);
      toast.append(createIcon(TOAST_ICONS[kind], 'md'), text, close);
      toast.firstChild.classList.add('toast__icon');
      toastRegion.appendChild(toast);
      requestAnimationFrame(function () { toast.classList.add('toast--visible'); });
      setTimeout(dismiss, 3800);
    }

    function closeMenus(except) {
      document.querySelectorAll('[data-dropdown-toggle][aria-expanded="true"]').forEach(function (toggle) {
        if (toggle === except) return;
        toggle.setAttribute('aria-expanded', 'false');
        document.getElementById(toggle.getAttribute('aria-controls')).hidden = true;
      });
      rowMenu.hidden = true;
    }

    function setField(scope, name, value) {
      const target = scope.querySelector('[data-field="' + name + '"]');
      if (target) target.textContent = value;
    }

    function setStatus(badge, status) {
      Object.keys(STATUS_MODIFIERS).forEach(function (key) {
        badge.classList.remove('status--' + STATUS_MODIFIERS[key]);
      });
      badge.classList.add('status--' + (STATUS_MODIFIERS[status] || 'available'));
    }

    function fillRow(row, vehicle) {
      Object.keys(vehicle).forEach(function (key) { row.dataset[key] = vehicle[key]; });
      setField(row, 'model', vehicle.model);
      setField(row, 'specs', vehicle.specs);
      setField(row, 'plate', vehicle.plate);
      setField(row, 'price', vehicle.price + ' €');
      setField(row, 'term', vehicle.term);
      setField(row, 'status', vehicle.status);
      setStatus(row.querySelector('.status'), vehicle.status);
      row.querySelector('[data-field="image"]').alt = 'Fotografía de ' + vehicle.model;
    }

    function applyFilter(status) {
      let visible = 0;
      document.querySelectorAll('[data-vehicle-row]').forEach(function (row) {
        const show = status === 'Todos' || row.dataset.status === status;
        row.hidden = !show;
        if (show) visible += 1;
      });
      document.querySelectorAll('.tabs__tab[data-fleet-filter]').forEach(function (tab) {
        const active = tab.dataset.fleetFilter === status;
        tab.classList.toggle('tabs__tab--active', active);
        tab.setAttribute('aria-pressed', String(active));
      });
      showToast('Filtro aplicado: ' + status + ' (' + visible + ' vehículos)');
    }

    function openMenu(trigger) {
      menuRow = trigger.closest('[data-vehicle-row]');
      const wasOpen = !rowMenu.hidden && rowMenu.dataset.owner === menuRow.dataset.plate;
      closeMenus();
      if (wasOpen) return;
      rowMenu.dataset.owner = menuRow.dataset.plate;
      rowMenu.querySelector('[data-menu-pause-label]').textContent =
        menuRow.dataset.status === 'Publicado' ? 'Pausar publicación' : 'Publicar oferta';
      rowMenu.hidden = false;
      const rect = trigger.getBoundingClientRect();
      const top = rect.bottom + 4 + rowMenu.offsetHeight > window.innerHeight ? rect.top - rowMenu.offsetHeight - 4 : rect.bottom + 4;
      rowMenu.style.setProperty('--row-menu-top', Math.max(8, top) + 'px');
      rowMenu.style.setProperty('--row-menu-left', Math.max(8, rect.right - rowMenu.offsetWidth) + 'px');
    }

    function openVehicleForm(row) {
      editingRow = row;
      vehicleForm.reset();
      if (row) {
        vehicleForm.elements.model.value = row.dataset.model;
        vehicleForm.elements.specs.value = row.dataset.specs;
        vehicleForm.elements.plate.value = row.dataset.plate;
        vehicleForm.elements.price.value = row.dataset.price;
        vehicleForm.elements.term.value = row.dataset.term;
        vehicleForm.elements.status.value = row.dataset.status;
      }
      vehicleModal.querySelector('[data-vehicle-title]').textContent = row
        ? 'Editar vehículo (' + row.dataset.plate + ')'
        : 'Crear nuevo vehículo en flota';
      vehicleModal.querySelector('[data-vehicle-submit]').textContent = row ? 'Actualizar vehículo' : 'Guardar vehículo';
      if (!vehicleModal.open) vehicleModal.showModal();
    }

    function openPreview(row) {
      const modal = document.getElementById('modal-preview');
      const image = modal.querySelector('[data-preview="image"]');
      image.src = row.dataset.img;
      image.alt = 'Fotografía de ' + row.dataset.model;
      modal.querySelector('[data-preview="status"]').textContent = row.dataset.status;
      setStatus(modal.querySelector('.status'), row.dataset.status);
      modal.querySelector('[data-preview="title"]').textContent = row.dataset.model;
      modal.querySelector('[data-preview="price"]').textContent = row.dataset.price + ' €/mes';
      modal.querySelector('[data-preview="specs"]').textContent = row.dataset.specs;
      modal.querySelector('[data-preview="plate"]').textContent = row.dataset.plate;
      modal.querySelector('[data-preview="term"]').textContent = row.dataset.term;
      modal.showModal();
    }

    function approveRequest(button) {
      if (button.disabled) return;
      const item = button.closest('[data-request]');
      button.disabled = true;
      button.classList.remove('btn--cta');
      button.classList.add('activity__button--approved');
      button.replaceChildren(createIcon('check_circle', 'sm'), 'Aprobado');
      const counter = document.querySelector('[data-stat="pending"]');
      const badge = document.querySelector('[data-pending-badge]');
      const pending = Math.max(0, parseInt(counter.textContent, 10) - 1);
      counter.textContent = pending;
      badge.textContent = pending + ' pendientes';
      showToast('Estudio de riesgo para \'' + item.dataset.applicant + '\' aprobado con éxito', 'success');
    }

    function handleRowMenuAction(action) {
      rowMenu.hidden = true;
      if (!menuRow) return;
      const plate = menuRow.dataset.plate;
      if (action === 'pause') {
        const status = menuRow.dataset.status === 'Publicado' ? 'Disponible' : 'Publicado';
        menuRow.dataset.status = status;
        setField(menuRow, 'status', status);
        setStatus(menuRow.querySelector('.status'), status);
        showToast('Estado de ' + plate + ' cambiado a: ' + status, 'info');
      } else if (action === 'duplicate') {
        const clone = menuRow.cloneNode(true);
        const newPlate = Math.floor(1000 + Math.random() * 9000) + ' CPX';
        clone.dataset.plate = newPlate;
        setField(clone, 'plate', newPlate);
        menuRow.after(clone);
        showToast('Vehículo duplicado con nueva matrícula ' + newPlate, 'success');
      } else if (action === 'delete') {
        if (window.confirm('¿Seguro que deseas eliminar el vehículo ' + menuRow.dataset.model + ' (' + plate + ') de la flota?')) {
          menuRow.remove();
          showToast('Vehículo ' + plate + ' eliminado correctamente', 'warn');
        }
      }
    }

    vehicleForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(vehicleForm);
      const vehicle = {
        model: data.get('model'),
        plate: String(data.get('plate')).toUpperCase(),
        specs: data.get('specs') || 'Automático · Híbrido · 2024',
        price: data.get('price'),
        term: data.get('term') || '36 meses · 10.000 km/año',
        status: data.get('status')
      };
      if (editingRow) {
        fillRow(editingRow, vehicle);
        showToast('Vehículo ' + vehicle.plate + ' actualizado con éxito', 'success');
      } else {
        const row = tableBody.querySelector('[data-vehicle-row]').cloneNode(true);
        row.hidden = false;
        fillRow(row, vehicle);
        tableBody.insertBefore(row, tableBody.firstChild);
        const fleet = document.querySelector('[data-stat="fleet"]');
        fleet.textContent = parseInt(fleet.textContent, 10) + 1;
        showToast('Vehículo ' + vehicle.model + ' (' + vehicle.plate + ') añadido a la flota', 'success');
      }
      vehicleModal.close();
    });

    document.querySelectorAll('dialog.modal').forEach(function (dialog) {
      dialog.addEventListener('click', function (event) {
        if (event.target === dialog) dialog.close();
      });
    });

    document.addEventListener('click', function (event) {
      const target = event.target;
      const dropdownToggle = target.closest('[data-dropdown-toggle]');
      const rowToggle = target.closest('[data-row-menu-toggle]');

      if (dropdownToggle) {
        const menu = document.getElementById(dropdownToggle.getAttribute('aria-controls'));
        const open = menu.hidden;
        closeMenus();
        menu.hidden = !open;
        dropdownToggle.setAttribute('aria-expanded', String(open));
      } else if (rowToggle) {
        openMenu(rowToggle);
      } else {
        closeMenus();
      }

      const toastTrigger = target.closest('[data-toast]');
      if (toastTrigger) {
        if (toastTrigger.getAttribute('href') === '#') event.preventDefault();
        showToast(toastTrigger.dataset.toast);
      }

      const sidebarLink = target.closest('[data-sidebar-link]');
      if (sidebarLink) {
        document.querySelectorAll('[data-sidebar-link]').forEach(function (link) {
          const active = link === sidebarLink;
          link.classList.toggle('sidebar__link--active', active);
          if (active) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      }

      const filterTrigger = target.closest('[data-fleet-filter]');
      if (filterTrigger) applyFilter(filterTrigger.dataset.fleetFilter);

      const company = target.closest('[data-company]');
      if (company) {
        document.querySelector('[data-company-name]').textContent = company.dataset.company;
        document.querySelector('[data-greeting]').textContent = 'Buenos días, ' + company.dataset.company;
        document.querySelectorAll('[data-company]').forEach(function (option) {
          const current = option === company;
          option.toggleAttribute('aria-current', current);
          option.querySelector('.dropdown__check').classList.toggle('dropdown__check--on', current);
        });
        showToast('Cambiado a cuenta corporativa: ' + company.dataset.company, 'success');
      }

      if (target.closest('[data-mark-read]')) {
        document.querySelector('[data-notif-badge]').hidden = true;
        document.querySelectorAll('.notif__dot').forEach(function (dot) {
          dot.className = 'notif__dot notif__dot--read';
        });
        showToast('Todas las alertas marcadas como leídas');
      }

      if (target.closest('[data-download-report]')) {
        showToast('Generando informe ejecutivo de flota (PDF / Excel)...');
        setTimeout(function () {
          showToast('Descarga iniciada: Informe_Flota_Arval_2024.pdf', 'success');
        }, 1200);
      }

      const menuAction = target.closest('[data-menu-action]');
      if (menuAction) handleRowMenuAction(menuAction.dataset.menuAction);

      if (target.closest('[data-vehicle-create]')) openVehicleForm(null);
      const editTrigger = target.closest('[data-vehicle-edit]');
      if (editTrigger) openVehicleForm(editTrigger.closest('[data-vehicle-row]'));
      const previewTrigger = target.closest('[data-vehicle-preview]');
      if (previewTrigger) openPreview(previewTrigger.closest('[data-vehicle-row]'));

      const detailTrigger = target.closest('[data-request-detail]');
      if (detailTrigger) {
        const item = detailTrigger.closest('[data-request]');
        const modal = document.getElementById('modal-request');
        requestButton = item.querySelector('[data-approve]');
        ['applicant', 'cif', 'score', 'model', 'fee', 'term'].forEach(function (field) {
          modal.querySelector('[data-request-field="' + field + '"]').textContent = item.dataset[field];
        });
        modal.showModal();
      }

      const approveTrigger = target.closest('[data-approve]');
      if (approveTrigger) approveRequest(approveTrigger);

      if (target.closest('[data-approve-modal]')) {
        document.getElementById('modal-request').close();
        if (requestButton) approveRequest(requestButton);
      }

      const closeTrigger = target.closest('[data-modal-close]');
      if (closeTrigger) closeTrigger.closest('dialog').close();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenus();
    });
    window.addEventListener('wheel', function () { rowMenu.hidden = true; }, { passive: true });
    window.addEventListener('touchmove', function () { rowMenu.hidden = true; }, { passive: true });
    window.addEventListener('resize', function () { closeMenus(); });
  })();
})();
