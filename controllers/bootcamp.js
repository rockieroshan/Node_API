exports.getAllData = (req, res, next) => {
  res.status(200).json({
    Employees: [
      {
        userId: '1',
        jobTitleName: 'Developer',
        firstName: 'Romin',
        lastName: 'Irani',
        preferredFullName: 'Romin Irani',
        employeeCode: 'E1',
        region: 'CA',
        phoneNumber: '408-1234567',
        emailAddress: 'romin.k.irani@gmail.com'
      },
      {
        userId: '2',
        jobTitleName: 'Developer',
        firstName: 'Neil',
        lastName: 'Irani',
        preferredFullName: 'Neil Irani',
        employeeCode: 'E2',
        region: 'CA',
        phoneNumber: '408-1111111',
        emailAddress: 'neilrirani@gmail.com'
      },
      {
        userId: '3',
        jobTitleName: 'Program Directory',
        firstName: 'Tom',
        lastName: 'Hanks',
        preferredFullName: 'Tom Hanks',
        employeeCode: 'E3',
        region: 'CA',
        phoneNumber: '408-2222222',
        emailAddress: 'tomhanks@gmail.com'
      }
    ]
  });
};
exports.getDataById = (req, res, next) => {
  res.status(200).json({
    userId: '3',
    jobTitleName: 'Program Directory',
    firstName: 'Tom',
    lastName: 'Hanks',
    preferredFullName: 'Tom Hanks',
    employeeCode: 'E3',
    region: 'CA',
    phoneNumber: '408-2222222',
    emailAddress: 'tomhanks@gmail.com'
  });
};
exports.createData = (req, res, next) => {
  res.status(200).json({
    userId: '3',
    jobTitleName: 'Program Directory',
    firstName: 'Tom',
    lastName: 'Hanks',
    preferredFullName: 'Tom Hanks',
    employeeCode: 'E3',
    region: 'CA',
    phoneNumber: '408-2222222',
    emailAddress: 'tomhanks@gmail.com'
  });
};
exports.updateDataById = (req, res, next) => {
  res.status(200).json({
    userId: '3',
    jobTitleName: 'Program Directory',
    firstName: 'Tom',
    lastName: 'Hanks',
    preferredFullName: 'Tom Hanks',
    employeeCode: 'E3',
    region: 'CA',
    phoneNumber: '408-2222222',
    emailAddress: 'tomhanks@gmail.com'
  });
};
exports.deleteDataById = (req, res, next) => {
  res.status(200).json({
    userId: '3',
    jobTitleName: 'Program Directory',
    firstName: 'Tom',
    lastName: 'Hanks',
    preferredFullName: 'Tom Hanks',
    employeeCode: 'E3',
    region: 'CA',
    phoneNumber: '408-2222222',
    emailAddress: 'tomhanks@gmail.com'
  });
};
