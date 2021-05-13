class UserError extends Error {
  constructor(str) {
    super(str);
    this.userType = "user";
    this.name = "User Error";
  }
}

try {
  // обязателен
  console.log('try1');
  throw new UserError('Wrong user');
  console.log('try2');
} catch (e) {
  // необязателен
  console.log(e.userType);
  console.log('catched error');
  // но должен быть хотя бы один
} finally {
  // необязателен
  console.log('finally');
}
