export default defineEventHandler((event) => {
    // console.log('New request: ' + event.node.req.url)

    let user = {
        name: '小莫',
        admin: true,
        avatar: 'https://mod.3dmgame.com/static/upload/mod/202211/MOD6386ccf455c06.png@webp',
    }

    return {
        code: 201,
        user
    }
})
