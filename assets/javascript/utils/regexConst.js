/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-escape */
// emailRegex from http://emailregex.com/
// dates under the format dd/mm/yyyy, mm/dd/yyyy, yyyy/mm/dd between 1921 and 2008

export const regexConst = {
    nameRegex: /[A-z]{2,}/,
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    birthdateRegex: /((0[1-9]|[1-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)(19[2-9][1-9]|200[0-8]))|((0[1-9]|1[0-2])(\/|-)(0[1-9]|[1-2][0-9]|3[0-1])(\/|-)(19[2-9][1-9]|200[0-8]))|((19[2-9][1-9]|200[0-8])(\/|-)(0[1-9]|1[0-2])(\/|-)(0[1-9]|[1-2][0-9]|3[0-1]))/,
};
