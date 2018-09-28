export default {
    items: [{
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            name: 'Create Shop',
            url: '/components/buttons',
            icon: 'icon-puzzle'
        },
        {
            name: 'Edit Mall/Edit Shop',
            url: '/components/social-buttons',
            icon: 'icon-puzzle'
        },
        {
            name: 'Advertisement Details',
            url: '/components/cards',
            icon: 'icon-puzzle'
        },
        {
            name: 'Create Mall',
            url: '/components/forms',
            icon: 'icon-puzzle'
        },
        {
            name: 'Category',
            url: '/components/modals',
            icon: 'icon-puzzle'
        },
        {
            name: 'Delete Mall',
            url: '/components/switches',
            icon: 'icon-puzzle'
        },
        {
            name: 'Users',
            url: '/components/tables',
            icon: 'icon-puzzle'
        },
        {
            name: 'Advertisement',
            url: '/components/tabs',
            icon: 'icon-puzzle'
        },
        {
            divider: true
        },
        {
            title: true,
            name: 'Extras'
        },
        {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [{
                    name: 'Login',
                    url: '/login',
                    icon: 'icon-star'
                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star'
                },
                {
                    name: 'Error 404',
                    url: '/404',
                    icon: 'icon-star'
                },
                {
                    name: 'Error 500',
                    url: '/500',
                    icon: 'icon-star'
                }
            ]
        }
    ]
};