'use strict';

function Flavors($http, $cookieStore) {

	var resourcesUrl = "/v1/flavors";
	var resourceUrl = "/v1/flavor";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (flavorId) {
			return $http.get(resourceUrl + '/' + flavorId, httpConfig);
		},
		save: function (flavor) {
			return $http.post(resourceUrl, flavor, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (flavorId) {
			return $http.delete(resourceUrl + '/' + flavorId, httpConfig);
		}
	}

}

function Images($http, $cookieStore) {

	var resourcesUrl = "/v1/images";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		query: function (query) {
			return $http.get(resourcesUrl, httpConfig);
		}
	}

}

function Volumes($http, $cookieStore) {

	var resourcesUrl = "/v1/volumes";
	var resourceUrl = "/v1/volume";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}

function Instances($http, $cookieStore) {

	var resourcesUrl = "/v1/vms";
	var resourceUrl = "/v1/vm";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}

function Networks($http, $cookieStore) {

	var resourcesUrl = "/v1/networks";
	var resourceUrl = "/v1/network";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}

function Subnets($http, $cookieStore) {

	var resourcesUrl = "/v1/subnets";
	var resourceUrl = "/v1/subnet";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}

function Ports($http, $cookieStore) {

	var resourcesUrl = "/v1/ports";
	var resourceUrl = "/v1/port";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function (query) {

			query = query ? query : {};

			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}

function Nats($http, $cookieStore) {

	var resourcesUrl = "/v1/nats";
	var resourceUrl = "/v1/nat";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}


function SecurityGroups($http, $cookieStore) {

	var resourcesUrl = "/v1/security-groups";
	var resourceUrl = "/v1/security-groups";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
	}

	return {
		get: function (id) {
			return $http.get(resourceUrl + '/' + id, httpConfig);
		},
		save: function (obj) {
			return $http.post(resourceUrl, obj, httpConfig);
		},
		query: function () {
			return $http.get(resourcesUrl, httpConfig);
		},
		remove: function (id) {
			return $http.delete(resourceUrl + '/' + id, httpConfig);
		}
	}

}


angular.module('services.resources', []);
angular.module('services.resources').factory('flavors', ['$http', '$cookieStore', Flavors]);
angular.module('services.resources').factory('images', ['$http', '$cookieStore', Images]);
angular.module('services.resources').factory('volumes', ['$http', '$cookieStore', Volumes]);
angular.module('services.resources').factory('instances', ['$http', '$cookieStore', Instances]);

angular.module('services.resources').factory('networks', ['$http', '$cookieStore', Networks]);
angular.module('services.resources').factory('subnets', ['$http', '$cookieStore', Subnets]);
angular.module('services.resources').factory('ports', ['$http', '$cookieStore', Ports]);
angular.module('services.resources').factory('nats', ['$http', '$cookieStore', Nats]);
angular.module('services.resources').factory('securityGroups', ['$http', '$cookieStore', SecurityGroups]);