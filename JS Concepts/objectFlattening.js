function flattenObject(obj, prefix = "", result = {}) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = !!prefix ? `${prefix}.${key}` : key;
  
        if (typeof obj[key] === "object" && obj[key] !== null) {
          flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }
  
  const input = {
    firstName: "Dev",
    lastName: "World",
    address: {
      billing: {
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
      },
  
      shipping: {
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
      },
      contact: "9999999999",
    },
  };
  
  const flatObj = flattenObject(input)
  
  console.log(flatObj);

  /**
   * OUTPUT:
   * 
    {
        firstName: 'Dev',
        lastName: 'World',
        'address.billing.city': 'Noida',
        'address.billing.state': 'Uttar Pradesh',
        'address.billing.pincode': '201301',
        'address.shipping.city': 'Noida',
        'address.shipping.state': 'Uttar Pradesh',
        'address.shipping.pincode': '201301',
        'address.contact': '9999999999'
    }
   */