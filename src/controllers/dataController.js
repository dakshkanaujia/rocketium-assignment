const dummyData = require('../data/dummyData.json');

exports.getAllData = (req, res) => {
  res.json(dummyData);
}

exports.filterData = (req, res) => {
    const { sortBy, filterBy, filterValue } = req.query;
    let filteredData = [...dummyData];
    
    if (filterBy && filterValue) {
        if(filterBy.toLowerCase() === 'name') {
            filteredData = filteredData.filter(item => item[filterBy].toLowerCase().includes(filterValue.toLowerCase()));
        }else{
            filteredData = filteredData.filter(item => item[filterBy].toLowerCase() == filterValue.toLowerCase());
        }
    }
    
    if (sortBy) {
        filteredData.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
    }
    
    res.json(filteredData);    
}
