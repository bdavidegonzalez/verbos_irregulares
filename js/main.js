document.addEventListener('DOMContentLoaded', () => {
    /**
     * Función genérica para crear y gestionar una tabla paginada.
     * @param {string} containerId - El ID del elemento que contendrá la tabla y la navegación.
     * @param {Array<Object>} data - El array de objetos a mostrar.
     * @param {Array<string>} headers - Un array con los nombres de las columnas.
     * @param {number} itemsPerPage - El número de ítems a mostrar por página.
     */
    function createPaginatedTable(containerId, data, headers, itemsPerPage = 5) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID "${containerId}" not found.`);
            return;
        }

        let currentPage = 0;
        const totalPages = Math.ceil(data.length / itemsPerPage);

        function render() {
            // Limpiar el contenedor
            container.innerHTML = '';

            // Crear la estructura de la tabla
            const tableWrapper = document.createElement('div');
            tableWrapper.className = 'table-wrapper';
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            
            // Crear encabezados
            const headerRow = document.createElement('tr');
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            // Llenar la tabla con los datos de la página actual
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = data.slice(startIndex, endIndex);

            pageData.forEach(item => {
                const row = document.createElement('tr');
                headers.forEach(header => {
                    const cell = document.createElement('td');
                    cell.textContent = item[header] || '';
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            tableWrapper.appendChild(table);
            container.appendChild(tableWrapper);

            // Crear y añadir la navegación si hay más de una página
            if (totalPages > 1) {
                const navigation = document.createElement('div');
                navigation.className = 'navigation';
                
                const prevBtn = document.createElement('button');
                prevBtn.textContent = 'Anterior';
                prevBtn.disabled = currentPage === 0;
                prevBtn.addEventListener('click', () => {
                    if (currentPage > 0) {
                        currentPage--;
                        render();
                    }
                });

                const nextBtn = document.createElement('button');
                nextBtn.textContent = 'Siguiente';
                nextBtn.disabled = currentPage >= totalPages - 1;
                nextBtn.addEventListener('click', () => {
                    if (currentPage < totalPages - 1) {
                        currentPage++;
                        render();
                    }
                });

                navigation.appendChild(prevBtn);
                navigation.appendChild(nextBtn);
                container.appendChild(navigation);
            }
        }

        render();
    }

    // Exponer la función globalmente para poder llamarla desde otras páginas
    window.createPaginatedTable = createPaginatedTable;
});
