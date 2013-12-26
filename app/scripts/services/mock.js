'use strict';

function MockFlavors() {

	return {

		query: function () {
			return [{
				disk: 20,
				ephemeral: 0,
				id: "0d922239-0564-4409-ad47-2a372bd96b88",
				is_public: false,
				name: "ci2_define1386308206.37",
				ram: 512,
				swap: "",
				vcpus: 1,
			}, {
				disk: 200,
				ephemeral: 0,
				id: "2bf274a6-b6ee-46c5-8633-426effae896d",
				is_public: false,
				name: "ci2_define1386322029.93",
				ram: 512,
				swap: "",
				vcpus: 1,
			}, {
				disk: 30,
				ephemeral: 0,
				id: "3e58ebb2-028b-41ac-9797-0ec15de7b539",
				is_public: false,
				name: "ci2_define1386333741.8",
				ram: 1024,
				swap: "",
				vcpus: 1,
			}, {
				disk: 30,
				ephemeral: 0,
				id: "4779ce33-a024-4bbb-b2c5-7e75cec41780",
				is_public: false,
				name: "ci2_define1386310761.13",
				ram: 512,
				swap: "",
				vcpus: 1,
			}, {
				disk: 30,
				ephemeral: 0,
				id: "4caa381b-6646-4b37-ad3b-9c73dd85b5b4",
				is_public: false,
				name: "ci2_define1386314635.96",
				ram: 2048,
				swap: "",
				vcpus: 2,
			}, {
				disk: 20,
				ephemeral: 0,
				id: "5baba2d9-7721-413b-8e8d-8c872d111c44",
				is_public: false,
				name: "ci2_define1386322190.11",
				ram: 1024,
				swap: "",
				vcpus: 1,
			}];
		}
	}


}

function MockImages() {

	return {
		query: function (query) {

			return [{
				create_at: "2013-12-03T09:12:53",
				deleted: false,
				id: "52766cfb-1f0e-461f-a68d-752b267ede56",
				is_public: false,
				min_disk: 0,
				min_ram: 0,
				name: "ae2",
				os: "",
				protected: false,
				size: 2791833600,
				status: "active",
				updated: "2013-12-03T09:12:54"
			}, {
				create_at: "2013-11-20T05:51:28",
				deleted: false,
				id: "b718a8e6-925d-44c3-9d6a-e4239decd01f",
				is_public: false,
				min_disk: 0,
				min_ram: 0,
				name: "AE2_CentOS6.3_x86-64_20131104110000",
				os: "",
				protected: false,
				size: 2791833600,
				status: "active",
				updated: "2013-11-20T05:51:29",
			}];

		}
	}

}

function MockVolumes() {

	return {

		query: function () {
			return [];
		}
	}

}

function MockInstances() {

	return {

		query: function () {
			return [{
					"status": "SHUTOFF",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-26T01:42:13Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1388022279.92",
					"created": "2013-12-26T01:44:47Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.21"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027f5",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "49b968b3-9ee2-4f22-869c-69cc30436080",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "PAUSED",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-26T01:28:18Z",
					"hostId": "b53192be6b2b67e9366cebb148b87adf5ede7f8c95a93f4ef166e901",
					"OS-EXT-SRV-ATTR:host": "cc_01.huacloud.demo",
					"name": "ci2_vm_pool1388021276.25",
					"created": "2013-12-26T01:28:03Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_01.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.18"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027f4",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "da9bfcfd-223a-4528-8984-dd0dd40604c5",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "PAUSED",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-25T10:33:53Z",
					"hostId": "b53192be6b2b67e9366cebb148b87adf5ede7f8c95a93f4ef166e901",
					"OS-EXT-SRV-ATTR:host": "cc_01.huacloud.demo",
					"name": "ci2_vm_pool1387967611.75",
					"created": "2013-12-25T10:33:39Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_01.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.16"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027f3",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "44db345c-8bba-4bfd-b6ca-755029d470be",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-25T10:23:02Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1387967125.69",
					"created": "2013-12-25T10:25:33Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.15"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027f2",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "a07da0f7-6460-452b-bd71-6850aff1cdc4",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-25T10:15:05Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1387966649.27",
					"created": "2013-12-25T10:17:36Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.13"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027f1",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "c1662848-9d4b-45e7-ab7c-ae0b6de3eaff",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-25T09:32:33Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "wangyu_server",
					"created": "2013-12-25T06:41:52Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["198.2.0.4"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027e5",
					"progress": 0,
					"flavor": {
						"id": "3e58ebb2-028b-41ac-9797-0ec15de7b539",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/3e58ebb2-028b-41ac-9797-0ec15de7b539",
							"rel": "bookmark"
						}]
					},
					"id": "268212fc-2526-4bac-90cc-aeb236ec89d4",
					"metadata": {}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-24T07:20:54Z",
					"hostId": "b53192be6b2b67e9366cebb148b87adf5ede7f8c95a93f4ef166e901",
					"OS-EXT-SRV-ATTR:host": "cc_01.huacloud.demo",
					"name": "ci2_vm_pool1387869630.95",
					"created": "2013-12-24T07:20:38Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_01.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.14"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027d9",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "b2cd8330-33c6-4b9e-bb71-833691ae5c9f",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-24T06:19:43Z",
					"hostId": "b53192be6b2b67e9366cebb148b87adf5ede7f8c95a93f4ef166e901",
					"OS-EXT-SRV-ATTR:host": "cc_01.huacloud.demo",
					"name": "ci2_vm_pool1387865960.14",
					"created": "2013-12-24T06:19:27Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_01.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.12"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027d7",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "fe3fcb13-1a46-45f0-ab92-6201445e345d",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-20T11:02:19Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1387537461.79",
					"created": "2013-12-20T11:04:29Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ads": ["10.1.0.8"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027d6",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "b9742955-1695-40db-876c-16fe3c619505",
					"metadata": {
						"ci2_user": "ads"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-20T10:59:45Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1387537308.16",
					"created": "2013-12-20T11:01:56Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ads": ["10.1.0.7"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027d5",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "140652f9-b3ba-4f66-87ec-9ed3cd18c523",
					"metadata": {
						"ci2_user": "ads"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-20T03:24:40Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1387443034.32",
					"created": "2013-12-19T08:50:42Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.20"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027c8",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "1978e4bd-809f-406f-b23f-b284583d0614",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-20T02:51:28Z",
					"hostId": "b53192be6b2b67e9366cebb148b87adf5ede7f8c95a93f4ef166e901",
					"OS-EXT-SRV-ATTR:host": "cc_01.huacloud.demo",
					"name": "ci2_vm_pool1387442927.52",
					"created": "2013-12-19T08:48:55Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_01.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.19"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027c6",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "2ea22459-78ff-4a0b-946d-843bf267f6ec",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-20T01:46:37Z",
					"hostId": "b53192be6b2b67e9366cebb148b87adf5ede7f8c95a93f4ef166e901",
					"OS-EXT-SRV-ATTR:host": "cc_01.huacloud.demo",
					"name": "ci2_vm_pool1387428361.77",
					"created": "2013-12-19T04:46:10Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_01.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ae2": ["11.1.0.17"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-000027b7",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "2adac0cb-de1c-4ce3-bb41-fafeced2f5b4",
					"metadata": {
						"ci2_user": "ae2"
					}
				}, {
					"status": "ACTIVE",
					"OS-EXT-STS:power_state": 1,
					"updated": "2013-12-18T08:32:35Z",
					"hostId": "02093ab00f12f7c9fe789ebd0501cd13def370250e0a852022b58dfa",
					"OS-EXT-SRV-ATTR:host": "cc_02.huacloud.demo",
					"name": "ci2_vm_pool1387355664.97",
					"created": "2013-12-18T08:34:33Z",
					"image": {
						"id": "52766cfb-1f0e-461f-a68d-752b267ede56",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/images/52766cfb-1f0e-461f-a68d-752b267ede56",
							"rel": "bookmark"
						}]
					},
					"OS-DCF:diskConfig": "MANUAL",
					"OS-EXT-SRV-ATTR:hypervisor_hostname": "cc_02.huacloud.demo",
					"pool_id": 1,
					"networks": {
						"ads": ["10.1.0.3"]
					},
					"OS-EXT-STS:task_state": null,
					"OS-EXT-STS:vm_state": "active",
					"OS-EXT-SRV-ATTR:instance_name": "instance-0000279c",
					"progress": 0,
					"flavor": {
						"id": "0d922239-0564-4409-ad47-2a372bd96b88",
						"links": [{
							"href": "http://192.168.1.15:8774/0d9df04de6334115aa4cf2e8d2cea4c4/flavors/0d922239-0564-4409-ad47-2a372bd96b88",
							"rel": "bookmark"
						}]
					},
					"id": "4d36151d-290c-441f-a8a2-c5d7a9eadd6d",
					"metadata": {
						"ci2_user": "ads"
					}
				}]

		}
	}
}


function MockNetworks() {

	return {

		query: function () {

			return [{
				"status": "ACTIVE",
				"subnets": ["05812e8a-9f77-4543-871c-98f1d3656d26"],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"vlan_id": 3,
				"metadata": {
					"ci2_user": "ae2"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "7250ace0-facd-447b-9a74-71b4f4996658",
				"vlan_id": 8,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["d7f438d3-e183-4606-bfe2-9d0cd068626b"],
				"name": "test",
				"pool_id": 1,
				"shared": false,
				"id": "427b6d8a-c990-4065-a8aa-26034506189a",
				"vlan_id": 5,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "62ce57f0-b701-4918-9bb7-8fb3adaf44df",
				"vlan_id": 9,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "eb79c219-9cfa-4551-a8d8-b75c67942f1a",
				"vlan_id": 7,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "82b7d7c2-48c0-4978-af73-391d613c55f1",
				"vlan_id": 6,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "028bbc53-d1a0-4347-9117-5eeec7e3f8d1",
				"vlan_id": 4,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "4c4438d5-83d7-4251-914e-5c0257a1e888",
				"vlan_id": 2,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["7d0b8543-a466-4b05-b87d-d158978b866f"],
				"name": "test",
				"pool_id": 1,
				"shared": false,
				"id": "2f74c0b6-0cba-4fd7-9cf2-3cb14c2fd193",
				"vlan_id": 2383,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "4228485f-39ed-418d-b946-3f9e60f3a1a3",
				"vlan_id": 1,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["06887548-9498-4eed-a436-6f7ef1d0e2ef"],
				"name": "cos",
				"pool_id": 1,
				"shared": false,
				"id": "4297f2fa-f80d-4d32-af8d-a856a2989866",
				"vlan_id": 2382,
				"metadata": {
					"ci2_user": "cos"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "network_wym",
				"pool_id": 1,
				"shared": false,
				"id": "0623b4b4-732b-4bfc-ac75-ab333191490a",
				"vlan_id": 2311,
				"metadata": {
					"ci2_user": "cos"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "network_wym",
				"pool_id": 1,
				"shared": false,
				"id": "897f06bc-84a2-48da-9e7f-4951a566e937",
				"vlan_id": 2381,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "network_wym",
				"pool_id": 1,
				"shared": false,
				"id": "90e2cb05-4412-4e18-9b8e-0a1ac074ff90",
				"vlan_id": 2011,
				"metadata": {
					"ci2_user": "cos"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "network_wym",
				"pool_id": 1,
				"shared": false,
				"id": "5c4e66f0-00f4-4ee4-9aa4-5155f554d2c3",
				"vlan_id": 2310,
				"metadata": {
					"ci2_user": "cos"
				}
			}, {
				"status": "ACTIVE",
				"subnets": ["9a7c59dd-dc8f-4ea4-8bd0-cf2bef483fda"],
				"name": "network_wym",
				"pool_id": 1,
				"shared": false,
				"id": "698d3094-4da4-4088-a088-86ec4c3af3ae",
				"vlan_id": 2300,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "0344fb44-d31f-4ede-8e30-46fd19cb9677",
				"vlan_id": 10,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "9de51df4-8e48-403b-bca2-8808b9699adc",
				"vlan_id": 11,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "289d544e-29d0-49cd-8b8a-cc47e9d9878e",
				"vlan_id": 12,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "5fd66804-16d4-4a90-89be-c1bbfbb8571d",
				"vlan_id": 13,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "820867a4-7f35-4ce6-894c-367083268c81",
				"vlan_id": 14,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "ce96258e-61e9-44bd-8d8b-daf37968d9b7",
				"vlan_id": 15,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "d611d7c6-e782-4317-b4e1-4cbc6a526618",
				"vlan_id": 16,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "6b3f37d8-5eca-4aac-89c7-80377fb17c1e",
				"vlan_id": 17,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "91525eea-eea7-4765-9a66-676c24194873",
				"vlan_id": 18,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "fca73c32-edbf-4bf3-8eb0-079b7d9c9026",
				"vlan_id": 2384,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "f0892498-e8c2-48db-b07b-75e4d0c39a1c",
				"vlan_id": 2385,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["666fcc18-f4a8-40b0-b9f3-905e5463ded0"],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "b48cfa04-272c-4153-9546-ea1a3ae668ed",
				"vlan_id": 2386,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "e26e3364-2ea5-446d-bd8f-7a8c677244ce",
				"vlan_id": 2387,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["aa337d95-2db9-4cd1-9e50-33ce8bfc0875"],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "3fa069f2-e68c-4230-a407-2e9158c92a31",
				"vlan_id": 2388,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "340630ea-8a66-44c7-a52b-e78896eb9dfa",
				"vlan_id": 2389,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["f7732386-d4d0-4a19-aecb-8bb466fdf780"],
				"name": "ae2",
				"pool_id": 1,
				"shared": false,
				"id": "1329d516-354f-4334-8d73-7d8d1216945d",
				"vlan_id": 2390,
				"metadata": {}
			}, {
				"status": "ACTIVE",
				"subnets": ["56b39c8c-7bb1-43f0-9a34-9eece4c8c36c"],
				"name": "network_portattach_wuym",
				"pool_id": 1,
				"shared": false,
				"id": "1f78b616-3e57-4748-b0f5-c74f28a3b401",
				"vlan_id": 4011,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "test",
				"pool_id": 1,
				"shared": false,
				"id": "d0cfff13-ab13-4fd2-9c0b-070b50af906f",
				"vlan_id": 4012,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "test",
				"pool_id": 1,
				"shared": false,
				"id": "c4624978-ad6f-4a9d-b207-84552cf15a3b",
				"vlan_id": 4013,
				"metadata": {
					"ci2_user": "test"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ads",
				"pool_id": 1,
				"shared": false,
				"id": "3abb5ebf-ece6-4aff-af23-b09dca6a0e0c",
				"vlan_id": 4014,
				"metadata": {
					"ci2_user": "ads"
				}
			}, {
				"status": "ACTIVE",
				"subnets": [],
				"name": "ads",
				"pool_id": 1,
				"shared": false,
				"id": "f57ba313-86a7-4062-8c1f-10e96d9c170d",
				"vlan_id": 4015,
				"metadata": {
					"ci2_user": "ads"
				}
			}, {
				"status": "ACTIVE",
				"subnets": ["d2c6fb5f-6f0b-4fcb-9234-89fdd23ead98"],
				"name": "ads",
				"pool_id": 1,
				"shared": false,
				"id": "20597d53-b040-4ce5-b53d-d4cbb83af583",
				"vlan_id": 4016,
				"metadata": {
					"ci2_user": "ads"
				}
			}]
		}

	}

}


function MockSubnets() {

	return {

		query: function () {
			return [];
		}
	}

}

function MockPorts() {


	return {

		query: function () {

			return [{
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:c3:73:5a",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.21"
				}],
				"id": "14fc4b63-f61e-4ccd-8dc9-8619adc2ed50",
				"device_id": "323a9720-c0c8-4c63-a08b-00ae04864fae"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "20597d53-b040-4ce5-b53d-d4cbb83af583",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:b2:68:29",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "d2c6fb5f-6f0b-4fcb-9234-89fdd23ead98",
					"ip_address": "10.1.0.8"
				}],
				"id": "0499a84f-c8d9-4041-bfb2-94b887633ac2",
				"device_id": "b9742955-1695-40db-876c-16fe3c619505"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_01.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:c6:e8:f9",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.15"
				}],
				"id": "fad96d78-0312-43f0-9843-6fdd42528fc8",
				"device_id": "800b30ee-126a-4dc2-985b-41d3977e7d58"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:11:32:a3",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.18"
				}],
				"id": "b4e11249-3080-4afb-8ff4-5bd5de773a57",
				"device_id": "dfcbef5f-426c-4416-8794-e9da2f6d5c03"
			}, {
				"status": "DOWN",
				"name": "PortForAttach-01",
				"compute_node": "",
				"network_id": "1f78b616-3e57-4748-b0f5-c74f28a3b401",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "",
				"mac_address": "fa:16:3e:99:2f:53",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "56b39c8c-7bb1-43f0-9a34-9eece4c8c36c",
					"ip_address": "103.0.0.24"
				}],
				"id": "a81a8da0-0ecc-40f2-ab75-e6709d5b59ca",
				"device_id": ""
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:a5:f2:8c",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.20"
				}],
				"id": "96d0abc2-48ba-4345-9e7a-2835adcddd71",
				"device_id": "1978e4bd-809f-406f-b23f-b284583d0614"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_01.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:90:0b:e2",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.16"
				}],
				"id": "339cac1e-25c2-4bc9-ac74-4c02145f7a9a",
				"device_id": "34c5f5f8-55d6-49e4-8a05-28b82df538bc"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "20597d53-b040-4ce5-b53d-d4cbb83af583",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:85:97:a2",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "d2c6fb5f-6f0b-4fcb-9234-89fdd23ead98",
					"ip_address": "10.1.0.3"
				}],
				"id": "7ab240f3-9971-498a-81d6-d1dad9a323b9",
				"device_id": "4d36151d-290c-441f-a8a2-c5d7a9eadd6d"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:9c:cd:76",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.13"
				}],
				"id": "2fccf59d-9d20-4590-923a-574d8f5a2ed8",
				"device_id": "86e7ecf9-65ae-4424-b92c-d369465890e6"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "20597d53-b040-4ce5-b53d-d4cbb83af583",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:f6:27:a0",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "d2c6fb5f-6f0b-4fcb-9234-89fdd23ead98",
					"ip_address": "10.1.0.7"
				}],
				"id": "536c3f7b-9039-400f-a0a7-375e12e3475e",
				"device_id": "140652f9-b3ba-4f66-87ec-9ed3cd18c523"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_01.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:61:fa:e3",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.14"
				}],
				"id": "53e0e6b0-7056-4540-ade1-e8e96a61922a",
				"device_id": "b2cd8330-33c6-4b9e-bb71-833691ae5c9f"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_01.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:17:c2:84",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.12"
				}],
				"id": "b5fe6432-4126-4b75-980f-73409a8bcae4",
				"device_id": "fe3fcb13-1a46-45f0-ab92-6201445e345d"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_01.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:56:1b:f7",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.19"
				}],
				"id": "4b733400-5e31-40d9-bda2-e916ea096b88",
				"device_id": "2ea22459-78ff-4a0b-946d-843bf267f6ec"
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_01.huacloud.demo",
				"network_id": "97c3e9bd-d825-48f3-804c-bcb204f96071",
				"attached_phyport": "eth5",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:51:93:09",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "05812e8a-9f77-4543-871c-98f1d3656d26",
					"ip_address": "11.1.0.17"
				}],
				"id": "26e9b2e1-31b9-48d6-8e59-965e2db6170b",
				"device_id": "2adac0cb-de1c-4ce3-bb41-fafeced2f5b4"
			}, {
				"status": "DOWN",
				"name": "",
				"compute_node": "",
				"network_id": "1329d516-354f-4334-8d73-7d8d1216945d",
				"attached_phyport": "eth1",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "",
				"mac_address": "fa:16:3e:2f:9a:c7",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "f7732386-d4d0-4a19-aecb-8bb466fdf780",
					"ip_address": "198.2.0.3"
				}],
				"id": "96556299-f5ac-439d-b663-ae5daaae2291",
				"device_id": ""
			}, {
				"status": "ACTIVE",
				"name": "",
				"compute_node": "cc_02.huacloud.demo",
				"network_id": "1329d516-354f-4334-8d73-7d8d1216945d",
				"attached_phyport": "eth1",
				"pool_id": 1,
				"bandwidth_tx": -1,
				"mtu": 1500,
				"device_owner": "compute:nova",
				"mac_address": "fa:16:3e:0a:9f:0c",
				"bandwidth_rx": -1,
				"fixed_ips": [{
					"subnet_id": "f7732386-d4d0-4a19-aecb-8bb466fdf780",
					"ip_address": "198.2.0.4"
				}],
				"id": "ed894a9e-72c9-4f44-91d7-fe6ce204a50c",
				"device_id": "268212fc-2526-4bac-90cc-aeb236ec89d4"
			}]

		}
	}

}

function MockNats() {


	return {

		query: function () {
			return [];
		}
	}

}


function MockSecurityGroups() {


	return {

		query: function () {
			return [];
		}

	}

}


angular.module('services.mocks', []);
angular.module('services.mocks').factory('mockFlavors', [MockFlavors]);
angular.module('services.mocks').factory('mockImages', [MockImages]);
angular.module('services.mocks').factory('mockVolumes', [MockVolumes]);
angular.module('services.mocks').factory('mockInstances', [MockInstances]);

angular.module('services.mocks').factory('mockNetworks', [MockNetworks]);
angular.module('services.mocks').factory('mockSubnets', [MockSubnets]);
angular.module('services.mocks').factory('mockPorts', [MockPorts]);
angular.module('services.mocks').factory('mockNats', [MockNats]);
angular.module('services.mocks').factory('mockSecurityGroups', [MockSecurityGroups]);