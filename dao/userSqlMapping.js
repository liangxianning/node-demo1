var user = {
    insert:'INSERT INTO test(id, name, age, sex, pwd) VALUES(0,?,?,1,"123456")',
    update:'update test set name=?, age=? where id=?',
    delete: 'delete from test where id=?',
    queryById: 'select * from test where id=?',
    queryAll: 'select * from test'
};

module.exports = user;