const fs = require("fs")
const path = require("path")
const uploadConfig = require("../configs/upload")

class DiskStorage{
  async saveFile(file){
    await fs.promises.rename( //rename = mudar arquivo de lugar
      path.resolve(uploadConfig.TMP_FOLDER, file), //pega daqui
      path.resolve(uploadConfig.UPLOADS_FOLDER, file) //envia para ca
    );
    return file;
  }

  async deleteFile(file){
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);//caminho do arquivo

    try{
      await fs.promises.stat(filePath) //retorna status do arquivo(aberto, corrompido, sendo usado, etc)
    }catch{
      return;
    }

    await fs.promises.unlink(filePath); //remover arquivo
  }

  //Criar updateFile
}

module.exports = DiskStorage;