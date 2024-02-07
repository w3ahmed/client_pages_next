export const  data = [
    {id: 3, title: 'Dell - G15-5511 Gaming Laptop', brand: 'brand-4', main_image: 'laptop.png', category: 'laptops',
        images:['phone.png', 'accessories.png'],
        colors: [ 'co-4', 'co-6' ],
        options: [
            {id:'opt-1', colors: ['co-4'], value: 'Core i7-12700H 14-Cores | RTX3060 6GB', quantity: 5, price: 1500},
            {id:'opt-2', colors: ['co-4'], value: 'Core i7-11800H 8-Cores | RTX3050 4GB', quantity: 5, price: 1200},
            {id:'opt-3', colors: ['co-6'], value: 'Core i5-11260H 6-Cores | RTX3050 4GB', quantity: 5, price: 1000},
        ],
        filter: ['cpu-1','cpu-2','cpu-3','vga-1','vga-3']
    },
    {id: 4, title: 'Lenovo IdeaPad Gaming 3', brand: 'brand-3', main_image: 'laptop.png', category: 'laptops',
        images:['phone.png', 'accessories.png'],
        colors: [ 'co-4' ],
        options: [
            {id:'opt-1', colors: ['co-4'], value: 'Core i5-11300H | RTX3050 4GB', quantity: 5, price: 1000},
            {id:'opt-2', colors: ['co-4'], value: 'Core i7-11370H | RTX 3050 Ti', quantity: 5, price: 1200},
        ],
        filter: ['cpu-3','cpu-2','cpu-3','vga-1','vga-2']
    },
    {id: 1, title: 'IPhone 14 Pro', brand: 'brand-1', main_image: 'phone.png', category: 'phones',
        images:['laptop.png', 'accessories.png'],
        colors: [ 'co-1', 'co-2', 'co-3' ],
        options: [
            {id:'opt-1', colors: ['co-1'], value: '8 RAM | 256 SSD', quantity: 5, price: 150},
            {id:'opt-2', colors: ['co-1', 'co-2'], value: '16 RAM | 512 SSD', quantity: 5, price: 200},
            {id:'opt-3', colors: ['co-3'], value: '32 RAM | 1T SSD', quantity: 5, price: 250}
        ],
        filter: ['ram-1','ram-3','ram-4','storage-1','storage-2','storage-3']
    },
    {id: 2, title: 'Samsung Galaxy 23 Ultra', brand: 'brand-2', main_image: 'phone.png', category: 'phones',
        images:['laptop.png', 'accessories.png'],
        colors: [ 'co-4', 'co-5', 'co-3' ],
        options: [
            {id:'opt-1', colors: ['co-3', 'co-4', 'co-5'], value: '8 RAM | 256 Storage', quantity: 5, price: 150},
            {id:'opt-2', colors: ['co-3', 'co-4'], value: '12 RAM | 256 Storage', quantity: 5, price: 200},
            {id:'opt-3', colors: ['co-5'], value: '12 RAM | 1T Storage', quantity: 5, price: 250}
        ],
        filter: ['ram-1','ram-2','ram-4','storage-2','storage-3']
    },
    {id: 5, title: 'Genius NX-7000 Wireless Mouse', brand: 'brand-6', main_image: 'accessories.png', category: 'accessories',
        images:['phone.png', 'laptop.png'],
        colors: [ 'co-4', 'co-2' ],
        options: null,
        no_options: [
            {color:'co-4', quantity: 5, price: 135},
            {color:'co-2', quantity: 8, price: 140}
        ],
        filter: []
    },
    {id: 6, title: 'MATEIN Travel Laptop Backpack', brand: 'brand-5', main_image: 'accessories.png', category: 'accessories',
        images:['phone.png', 'laptop.png'],
        colors: [ 'co-6' ],
        options: null,
        no_options: [{color:'co-6', quantity: 5, price: 135}],
        filter: []
    },

]


export const props = [
    {name: 'vga', value: 'VGA', options: [
        {id: 'vga-1', value: 'RTX3050 4GB'},
        {id: 'vga-2', value: 'RTX 3050 Ti'},
        {id: 'vga-3', value: 'RTX3060 6GB'},
    ]},
    {name: 'cpu', value: 'CPU', options: [
        {id: 'cpu-1', value: 'Core i7-12700H'},
        {id: 'cpu-2', value: 'Core i7-11370H'},
        {id: 'cpu-3', value: 'Core i5-11300H'},
    ]},
    {name: 'ram', value: 'RAM', options: [
        {id: 'ram-1', value: '8 Giga'},
        {id: 'ram-2', value: '12 Giga'},
        {id: 'ram-3', value: '16 Giga'},
        {id: 'ram-4', value: '32 Giga'},
    ]},
    {name: 'storage', value: 'Storage', options: [
        {id: 'storage-1', value: '256 Giga'},
        {id: 'storage-2', value: '512 Giga'},
        {id: 'storage-3', value: '1 Tera'},
    ]},
]

export const brands = [
    {id: 'brand-1', name: 'apple'},
    {id: 'brand-2', name: 'samsung'},
    {id: 'brand-3', name: 'lenovo'},
    {id: 'brand-4', name: 'dell'},
    {id: 'brand-5', name: 'matein'},
    {id: 'brand-6', name: 'genius'},
]

export const colors = [
    {id: 'co-1', name: 'Red', code: '#d90505'},
    {id: 'co-2', name: 'Blue', code: '#0016bd'},
    {id: 'co-3', name: 'Green', code: '#00b718'},
    {id: 'co-4', name: 'Black', code: '#000000'},
    {id: 'co-5', name: 'White', code: '#fff'},
    {id: 'co-6', name: 'Gray', code: '#818181'},
]
export const category = [
    {id: 'cate-1', name: 'Laptops', url_name: 'laptops'},
    {id: 'cate-2', name: 'Phones', url_name: 'phones'},
    {id: 'cate-3', name: 'Accessories', url_name: 'accessories'},
]