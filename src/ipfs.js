const IPFS = require('ipfs-api')

// const projectId = 'x';   //(Step 3. Place the project id from your infura project)
// const projectSecret = 'x';  //(Step 4. Place the project_secrect from your infura project)

// const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

let auth;


const ipfs = new IPFS({
    host: 'ipfs.infura.io', port: 5001, protocol: 'https', headers: {
        authorization: auth,
    },
})

export default ipfs
