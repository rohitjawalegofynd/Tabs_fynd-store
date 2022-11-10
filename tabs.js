<script>
        const tabsem = document.querySelectorAll('[data-tab-target]')
        const tabContents = document.querySelectorAll('[data-tab-content]')

        tabsem.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('active')
                })
                tabsem.forEach(tab => {
                    tab.classList.remove('active')
                })
                tab.classList.add('active')
                target.classList.add('active')
            })
        })
    </script>
