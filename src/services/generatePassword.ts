class generatePassword {
    generatePass(length: number){
        var result = '';
        var character = '!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        var characterLength = character.length;
        for(var i = 0; i < length; i++){
            result += character.charAt(Math.floor(Math.random() * characterLength));
        }

        return result;
    }

    generateCode(length: number){
        var result = '';
        var character = '0123456789';
        var characterLength = character.length;
        for( var i = 0; i < length; i++){
            result += character.charAt(Math.floor(Math.random() * characterLength));
        }
        return result;
    }
}

export default new generatePassword();