export default defineEventHandler((event) => {
    // console.log('New request: ' + event.node.req.url)
    return {
        status: 200,
        body: 'Hello world!'
    }
})
