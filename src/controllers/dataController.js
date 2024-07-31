const dummyData = require('../data/dummyData.json');

const getAllData = (req, res) => {
    try{
        if(dummyData && dummyData.length != 0){
            res.json(dummyData);
        }else{
            res.status(404).json({message: 'No data found'});
        }
    }catch(error){
        console.error('Error fetching data:', error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}
const filterData = (req, res) => {
    try {
        const { sortBy, filterBy, filterValue } = req.query;
        let filteredData = [...dummyData];

        if (filterBy && filterValue) {
            if (filterBy.toLowerCase() === 'name') {
                filteredData = filteredData.filter(item => item[filterBy].toLowerCase().includes(filterValue.toLowerCase()));
            } else {
                filteredData = filteredData.filter(item => item[filterBy].toLowerCase() == filterValue.toLowerCase());
            }
        }

        if (sortBy) {
            filteredData.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
        }

        res.json(filteredData);
    } catch (error) {
        console.error('Error filtering data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {getAllData, filterData};