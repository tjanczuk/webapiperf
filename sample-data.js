exports.customer = {
	ID: 999,
	LastName: 'Smith',
	FirstName: 'Mary',
	HouseNumber: '333',
	Street: 'Main Street NE',
	City: 'Redmond',
	State: 'WA',
	ZipCode: '98053'
};

exports.orders = [
	{
		ID: 1,
		CustomerId: 999,
		TotalAmount: 170.0,
		Items: [
			{
				ID: 2000,
				OrderId: 1,
				Decription: 'Shoes',
				Quantity: 1,
				UnitPrice: 100.0
			},
			{
				ID: 2001,
				OrderId: 1,
				Decription: 'Socks',
				Quantity: 1,
				UnitPrice: 20.0
			},
			{
				ID: 2002,
				OrderId: 1,
				Decription: 'Sweater',
				Quantity: 1,
				UnitPrice: 50.0
			}
		]
	},
	{
		ID: 1,
		CustomerId: 999,
		TotalAmount: 180.0,
		Items: [
			{
				ID: 1000,
				OrderId: 1,
				Decription: 'Bicycle',
				Quantity: 1,
				UnitPrice: 200.0
			},
			{
				ID: 1001,
				OrderId: 1,
				Decription: 'Chain',
				Quantity: 1,
				UnitPrice: 20.0
			},
			{
				ID: 1002,
				OrderId: 1,
				Decription: 'Tire',
				Quantity: 2,
				UnitPrice: 20.0
			},
			{
				ID: 1003,
				OrderId: 1,
				Decription: 'Rack',
				Quantity: 1,
				UnitPrice: 20.0
			}
		]
	},
	{
		ID: 2,
		CustomerId: 999,
		TotalAmount: 200.0,
		Items: [
			{
				ID: 1002,
				OrderId: 2,
				Decription: 'Jacket',
				Quantity: 1,
				UnitPrice: 40.0
			}
		]
	},
	{
		ID: 3,
		CustomerId: 999,
		TotalAmount: 180.0,
		Items: [
			{
				ID: 1000,
				OrderId: 3,
				Decription: 'Shovel',
				Quantity: 1,
				UnitPrice: 200.0
			},
			{
				ID: 1001,
				OrderId: 3,
				Decription: 'Rake',
				Quantity: 1,
				UnitPrice: 20.0
			},
			{
				ID: 1002,
				OrderId: 3,
				Decription: 'Pruning saw',
				Quantity: 2,
				UnitPrice: 20.0
			},
			{
				ID: 1003,
				OrderId: 3,
				Decription: 'Hat',
				Quantity: 1,
				UnitPrice: 20.0
			}
		]
	}
];
