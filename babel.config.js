module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '../controllers': '../controllers',
                '../config': '../config',
                '../database': '../database',
                '../Models': '../Models',
                '../routes': '../routes',
                '../service': '../service'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}