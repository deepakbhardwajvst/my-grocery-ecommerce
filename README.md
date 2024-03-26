header-categories and location  search functionality added also resuable components 
navbar-dropdown added with reusable components

{data.map((data, index) => (
          <div key={data.id}>
            <Card data={data} index={index} />
          </div>
        ))}
json-server --watch db.json --port:3000 for running product data