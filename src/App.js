import React, { useEffect, useState } from 'react';



//Bài 4


function App() {

  class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        throw new Error("Các lớp con phải thực hiện phương thức này");
    }

    toString() {
        return `Shape(color=${this.color})`;
    }
}

// Lớp con Rectangle
class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    toString() {
        return `Rectangle(color=${this.color}, length=${this.length}, width=${this.width})`;
    }
}

// Lớp con Triangle
class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }

    toString() {
        return `Triangle(color=${this.color}, base=${this.base}, height=${this.height})`;
    }
}


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

  //company.category ==='Retail');

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

// Object Destructuring từ companies[0]



  const printEachComapnyafter1987 = companies.filter(company => company.start > 1987);

    const companyRetail = companies
    .filter(company => company.category === 'Retail')
    .map(company => ({
      ...company,
      start: company.start + 1
    }));
  const companySort = companies.sort((a, b) => a.end - b.end);


  const companyRetail2= companies.filter(company => {
        if (company.category === 'Retail') {
          company.start += 1;
    
          return true;
        }
      }
      );
 
  /////////////////////////////////////
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const ageSort = ages.sort((a, b) => a - b);
  const totalAge = ages.reduce((sum, age) => sum + age, 0);



  const originalCompanies = [
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
  const { name, category } = originalCompanies[0];

  // Tạo một đối tượng mới với các thuộc tính name, category và phương thức print
  const newCompany = {
    name,
    category,
    print() {
      return `Name: ${this.name}, Category: ${this.category}`;
    }
  };

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  const Sum = (...so) => {
    const sum = so.reduce((acc, crrt) => acc + crrt, 0);
    return sum;
  };
  const rs = Sum(1, 2, 3, 4, 5);




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
      <h1>List of companies:</h1>
      <h2>
        {companies.map((company, index) => (
          <li key={index}>Name : {company.name}, Category : {company.category}, Start{company.start}, End : {company.end} </li>
        )
        )}
      </h2>




      <h1>Name of each company that started after 1987 : </h1>
      <h2>{printEachComapnyafter1987.map((company, index) => (
        <li key={index}> Name : {company.name}, Category : {company.category}, Start{company.start}, End : {company.end}</li>
      ))}</h2>
 <div>
      <h1> Retail Companies</h1>
      <ul>
        {companyRetail.map((company, index) => (
          <li key={index}>
            {company.name} - {company.category} - Start Year: {company.start}
          </li>
        ))}
      </ul>
    </div>


    <h1>The start and the end in paragraphs elements</h1>

          <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {companyRetail2.map((company) => (
            <tr>
              <th>{company.name}</th>
              <th>{company.category}</th>
              <th>{company.start}</th>
              <th>{company.end}</th>

            </tr>
          ))}
        </tbody>
      </table>



      <h1>Sort the companies based on their end date in ascending order : </h1>
      <h2>
        {companySort.map((company, index) => (
          <li key={index}>Name : {company.name}, Category : {company.category}, Start{company.start}, End : {company.end} </li>
        )
        )}
      </h2>



      <h1>Sort the ages array in descending order : </h1>
      <h2>
        {ageSort.map((age, index) => (
          <li key={index}>{age}</li>
        )
        )}
      </h2>



      <h1>Total Sum of Ages:</h1>
      <h2>{totalAge}</h2>
        <div><h1>Company Information:</h1>
        <hh2>{newCompany.print()}</hh2></div>
      
        <div>
      <h1>Tổng các số: {rs}</h1>
    </div>

    </div>
  );
}

export default App;
