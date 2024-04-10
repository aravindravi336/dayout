// Snippets.js
export const Snippets = {
    appendAlert: (message, type) => {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
      const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('');
  
      alertPlaceholder.innerHTML = ''; // Clear previous alerts
      alertPlaceholder.append(wrapper);
    }
  };
  