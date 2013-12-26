'use strict';

function Instances($http, $cookieStore) {

	var resourcesUrl = '/v1/vms';
	var resourceUrl = '/v1/vm';
	var startVmUrl = '/v1/vm-start';
	var stopVmUrl = '/v1/vm-stop';
	var pauseVmUrl = '/v1/vm-pause';
	var unPauseVmUrl = '/v1/vm-unpause';
	var rebootVmUrl = '/v1/vm-reboot';
	var vncVmUrl = '/v1/vm-vnc';
	var attachVolumeUrl = "/v1/volume-attach/{server_id}";
	var detachVolumeUrl = "/v1/volume-detach/{server_id}";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
		}
	};

	if (!useNode) {
		resourceUrl = rootUrl + resourceUrl;
		resourcesUrl = rootUrl + resourcesUrl;
		startVmUrl = rootUrl + startVmUrl;
		stopVmUrl = rootUrl + stopVmUrl;
		pauseVmUrl = rootUrl + pauseVmUrl;
		rebootVmUrl = rootUrl + rebootVmUrl;
		vncVmUrl = rootUrl + vncVmUrl;
		unPauseVmUrl = rootUrl + unPauseVmUrl;

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
		},
		start: function (id) {
			return $http.post(startVmUrl + '/' + id, {}, httpConfig);
		},
		stop: function (id) {
			return $http.post(stopVmUrl + '/' + id, {}, httpConfig);
		},
		pause: function (id) {
			return $http.post(pauseVmUrl + '/' + id, {}, httpConfig);
		},
		unpause: function(id){
			return $http.post(unPauseVmUrl + '/' + id, {}, httpConfig);
		},
		reboot: function (id) {
			return $http.post(rebootVmUrl + '/' + id, {}, httpConfig);
		},
		getVnc: function (id) {
			return $http.get(vncVmUrl + '/' + id + "?type=novnc", httpConfig);
		}
	}

}

function Flavors($http, $cookieStore) {

	var resourcesUrl = "/v1/flavors";
	var resourceUrl = "/v1/flavor";

	var rootUrl = $cookieStore.get('rootUrl');
	var useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
		},
		'cache': true
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
		query: function (cache) {
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
		},
		'cache': true
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
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
			'X-Auth-Token': $cookieStore.get('accessToken'),
			'X-Api-Request': true
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