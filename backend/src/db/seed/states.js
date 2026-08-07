// All 28 states + 8 union territories of India, each mapped to ONE main city.
// This is intentional (per product decision): users are ranked under their state's
// main city, not their exact town, to keep city leaderboards meaningful rather than
// fragmented across hundreds of small towns.

const states = [
  { name: 'Andhra Pradesh', main_city: 'Visakhapatnam' },
  { name: 'Arunachal Pradesh', main_city: 'Itanagar' },
  { name: 'Assam', main_city: 'Guwahati' },
  { name: 'Bihar', main_city: 'Patna' },
  { name: 'Chhattisgarh', main_city: 'Raipur' },
  { name: 'Goa', main_city: 'Panaji' },
  { name: 'Gujarat', main_city: 'Ahmedabad' },
  { name: 'Haryana', main_city: 'Gurugram' },
  { name: 'Himachal Pradesh', main_city: 'Shimla' },
  { name: 'Jharkhand', main_city: 'Ranchi' },
  { name: 'Karnataka', main_city: 'Bengaluru' },
  { name: 'Kerala', main_city: 'Thiruvananthapuram' },
  { name: 'Madhya Pradesh', main_city: 'Bhopal' },
  { name: 'Maharashtra', main_city: 'Mumbai' },
  { name: 'Manipur', main_city: 'Imphal' },
  { name: 'Meghalaya', main_city: 'Shillong' },
  { name: 'Mizoram', main_city: 'Aizawl' },
  { name: 'Nagaland', main_city: 'Kohima' },
  { name: 'Odisha', main_city: 'Bhubaneswar' },
  { name: 'Punjab', main_city: 'Chandigarh' },
  { name: 'Rajasthan', main_city: 'Jaipur' },
  { name: 'Sikkim', main_city: 'Gangtok' },
  { name: 'Tamil Nadu', main_city: 'Chennai' },
  { name: 'Telangana', main_city: 'Hyderabad' },
  { name: 'Tripura', main_city: 'Agartala' },
  { name: 'Uttar Pradesh', main_city: 'Lucknow' },
  { name: 'Uttarakhand', main_city: 'Dehradun' },
  { name: 'West Bengal', main_city: 'Kolkata' },
  // Union Territories
  { name: 'Andaman and Nicobar Islands', main_city: 'Port Blair' },
  { name: 'Chandigarh', main_city: 'Chandigarh' },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', main_city: 'Daman' },
  { name: 'Delhi', main_city: 'New Delhi' },
  { name: 'Jammu and Kashmir', main_city: 'Srinagar' },
  { name: 'Ladakh', main_city: 'Leh' },
  { name: 'Lakshadweep', main_city: 'Kavaratti' },
  { name: 'Puducherry', main_city: 'Puducherry' },
];

module.exports = states;
