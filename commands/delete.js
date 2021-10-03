module.exports = {
    name: 'delete',
    maxArgs: 0,
    permissionError: 'You must be an admin to use this command',
    permissions: 'ADMINISTRATOR',
    execute (message, arguments, text) {
        message.channel.delete();
    }
}