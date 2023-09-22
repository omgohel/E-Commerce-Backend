const userTypeDefs = `#graphql
  type User {
    id: Int
    uuid: String
    first_name: String
    middle_name: String
    last_name: String
    email: String
    password: String
    phone_no: String
    role: Int
    age: Int
    address: String
    pincode: Int
    city: String
    state: String
    country: String
    is_email_verified: Boolean
    token: String
    createdAt: String
    updatedAt: String
  }

  type getAllUsersWithPagination {
    userData: [User]
    count: Int
  }

  type usersList {
    data: getAllUsersWithPagination
    meta: Meta
  }

  type Query {
    getAllUsers(
      first_name: String
      last_name: String
    ): usersList
  }
`;

module.exports = { userTypeDefs };
