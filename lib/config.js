require('dotenv').config()

function getValidConfig(configEnv, keys) {
  let { config, missingkeys } = keys.reduce(
    (acc, key) => {
      if (!configEnv[key]) {
        acc.missingkeys.push(key)
      } else {
        acc.config[key] = configEnv[key]
      }
      return acc
    },
    { config: {}, missingkeys: [] }
  )
  if (missingkeys.length) {
    throw new Error(`Contentful key is missing : ${missingkeys.join(', ')}`)
  }
  return config
}

module.exports = {
  getConfigForKeys　(keys) {
    const configEnv = {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
      CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
    }
    return getValidConfig(configEnv, keys)
  }
}
