// 1) Sum up the instances of each of these
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck"
];

// car: 5, truck: ...

let instances = {};

const addInstance = (instance) => {
	if (typeof instances[instance] === 'undefined') {
		instances[instance] = 1;
		return;
	}

	instances[instance]++;
};

data.forEach(addInstance);

console.table(instances);