export default  [
        {
            Key: '100',
            MenuName: '控制台',
            Icon:'layui-icon',
            MenuUrl: '/admin/welcome'
        },
        {
            Key: '200',
            MenuName: 'CMS管理',
            ChildrenMenu: [
                {
                    Key: '201',
                    MenuName: '文章管理',
                    MenuUrl: '/admin/article/arts?title=文章'
                },
                {
                    Key: '202',
                    MenuName: '笑话管理',
                    MenuUrl: '/admin/article/jokes?title=笑话'
                },
                {
                    Key: '203',
                    MenuName: '新闻管理',
                    MenuUrl: '/admin/article/news?title=新闻'
                }
            ]
        },
        {
            Key: '300',
            MenuName: '系统设置',
            ChildrenMenu: [
                {
                    Key: '301',
                    MenuName: 'PC端设置',
                    MenuUrl: '/admin/setting/pc?title=PC端设置'
                },
                {
                    Key: '302',
                    MenuName: 'App设置',
                    MenuUrl: '/admin/setting/app?title=App设置'
                }
            ]
        }
    ]
