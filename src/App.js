import React, { useEffect, useState } from 'react';

function App() {
  // RQ1:
  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Micheal', age: 9 },
    { name: 'Jhon', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elizabeth', age: 16 }
  ];
  const firstPersonIsTeenager = people.find(person => person.age >= 10 && person.age <= 20);
  const allPersonIsTeenager = people.filter(person => person.age >= 10 && person.age <= 20);
  const CheckeveryPerson = people.every(person => person.age >= 10 && person.age <= 20);
  const CheckanyPerson = people.some(person => person.age >= 10 && person.age <= 20);

  // RQ2:
  var array = [1, 2, 3, 4];
  const sum = array.reduce((acc, crt) => acc + crt, 0);

  // RQ3:
  const companies = [
    { name: 'Company One', category: "Finance", start: 1981, end: 2004 },
    { name: 'Company Two', category: "Retail", start: 1992, end: 2008 },
    { name: 'Company Three', category: "Auto", start: 1999, end: 2007 },
    { name: 'Company Four', category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const [companyList, setCompanyList] = useState([]);

  // Populate companyList with company details
  useEffect(() => {
    const companiesData = companies.map(company => ({
      name: company.name,
      category: company.category,
      start: company.start,
      end: company.end
    }));
    setCompanyList(companiesData);
  }, [companies]);  // <-- Add companies as a dependency
  // Empty dependency array to ensure it runs once when the component is mounted

  return (
    <div>
      <h1>----REQUIRE 1---- : </h1>
      <h2>
        First person of the people array is teenager : Name : {firstPersonIsTeenager.name} , Age : {firstPersonIsTeenager.age}
      </h2>
      <h2>
        All persons of the people array are teenagers 
        <ul>
          {allPersonIsTeenager.map((person, index) => (
            <li key={index}>Name : {person.name} , Age : {person.age}</li>
          ))}
        </ul>
      </h2>
      <h2>
        Check if every person of the people array is a teenager: {CheckeveryPerson ? 'True' : 'False'}
      </h2>
      <h2>
        Check if any person of the people array is a teenager: {CheckanyPerson ? 'True' : 'False'}
      </h2>

      <h1>----REQUIRE 2---- : </h1>
      <h2>The sum of the array is: {sum}</h2>

      <h1>----REQUIRE 3---- : </h1>
      <h2>List of companies:</h2>
      <ul>
        {companyList.map((company, index) => (
          <li key={index}>
            {company.name} - {company.category} ({company.start} - {company.end})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
