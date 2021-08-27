import bootstrap from './index'
bootstrap().then(({ app }) => {
    app.listen(3333, () => {
        console.log('Server is ready on port 3333')
    })
})