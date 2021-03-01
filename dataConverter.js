const fetchUsersAccount = (data, id) => {
  const account_name = data["account_name"];
  const account_type = data["account_type"];
  return { id, account_name, account_type };
};

const fetchUserData = (data, userId) => {
  const firstname = data["firstname"];
  const dob = data["dob"];
  const address = data["address"];
  const city = data["city"];
  const phone = data["phone"];
  const state = data["state"];
  const zip = data["zip"];
  const email = data["email"];
  const gender = data["gender"];
  const user_type =
    data["userType"] === undefined ? data["user_type"] : data["userType"];
  const userAccountId = userId;
  return {
    userId,
    firstname,
    dob,
    address,
    city,
    phone,
    state,
    zip,
    email,
    gender,
    user_type,
    userAccountId,
  };
};

const fetchAgentData = (data, id) => {
  const agent_name = data["agent"];
  return { id, agent_name };
};
const fetchLobData = (data, id) => {
  const category_name = data["category_name"];
  return { id, category_name };
};
const fetchCarrierData = (data, id) => {
  const company_name = data["company_name"];
  return { id, company_name };
};

const fetchPolicyData = (data, id) => {
  const policy_number = data["policy_number"];
  const policy_start_data = data["policy_start_date"];
  const policy_end_date = data["policy_end_date"];
  const category_name = data["category_name"];
  const company_id = id;
  const user_id = id;
  return {
    id,
    policy_number,
    policy_start_data,
    policy_end_date,
    category_name,
    company_id,
    user_id,
  };
};

module.exports = {
  fetchPolicyData,
  fetchUserData,
  fetchAgentData,
  fetchCarrierData,
  fetchLobData,
  fetchUsersAccount,
};
