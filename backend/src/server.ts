import bootstrap from './index'
bootstrap().then(({ app }) => {
    app.listen(3000, () => {
        console.log('Server is ready on port 3000')
    })
})