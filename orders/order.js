 document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("orderRowContainer");

    container.addEventListener("click", function (e) {
      if (e.target.closest(".btn-add-row")) {
        const newRow = document.createElement("div");
        newRow.className = "row mb-3 order-row";
        newRow.innerHTML = `
          <div class="col-md-6">
            <label class="form-label">Order Type <span class="text-danger">*</span></label>
            <div class="d-flex gap-2">
              <select class="form-select order-select">
                <option value="">Select Order Type</option>
                <option>Sample</option>
                <option>Bulk</option>
              </select>
              <button type="button" class="btn btn-warning btn-add" title="Add New Order">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <label class="form-label">Order Date <span class="text-danger">*</span></label>
            <div class="d-flex gap-2">
              <input type="date" class="form-control order-date" />
              <button type="button" class="btn btn-success btn-add-row" title="Add New Date">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        `;
        container.appendChild(newRow);
      }
    });
  });


     function addNewOrderType() {
    const input = document.getElementById("newOrderTypeInput");
    const newType = input.value.trim();
    if (newType) {
      const select = document.getElementById("orderSelect");
      const option = document.createElement("option");
      option.text = newType;
      option.value = newType.toLowerCase().replace(/\s+/g, '-');
      select.add(option);
      select.value = option.value;

      input.value = ''; // clear input
      const modal = bootstrap.Modal.getInstance(document.getElementById('addOrderTypeModal'));
      modal.hide(); // hide modal after adding
    }
  }


    function addRow(button) {
    const currentRow = button.closest('.form-row');
    const clone = currentRow.cloneNode(true);

    // Reset input values in the new row
    clone.querySelectorAll('input, select').forEach(input => {
      input.value = '';
    });

    // Append cloned row after the current one
    currentRow.parentNode.insertBefore(clone, currentRow.nextSibling);
  }


  function removeRow(button) {
  const row = button.closest('.row');
  const parent = row.parentNode;
  if (parent.children.length > 1) {
    parent.removeChild(row);
  } else {
    alert("At least one row must remain.");
  }
}