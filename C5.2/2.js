const jsonString = `
{
    "list": [{
	"name": "Petr",
	"age": "20",
	"prof": "mechanic"
 	},
	{
	"name": "Vova",
	"age": "60",
	"prof": "pilot"
    }]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;

list.forEach(person => {
	const name = list.name;
	const age = list.age;
	const prof = list.prof;
	list.push({
		name: name,
		age: age,
		prof: prof,
	});
})

const result = {
	list:list
};
console.log('result', result);
