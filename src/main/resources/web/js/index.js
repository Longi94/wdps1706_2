const SAMPLE_DATA = [
    {
        name: "Donald Trump",
        positive: 0.2,
        negative: 0.8,
        type: "person",
        texts: [
            '<urn:uuid:c0fa8015-bd8a-4eb7-9dd1-e64c0c124076>',
            '<urn:uuid:c08a3a92-2645-4a16-9812-358343cd9d83>',
            '<urn:uuid:bdba16fa-758e-4edb-bccf-52ca717ae7f8>',
            '<urn:uuid:bd3b10f9-c971-4859-9045-e8540d9a213d>',
            '<urn:uuid:b669fba5-c189-4716-a0f7-21ad33680ed0>',
            '<urn:uuid:b55439c4-623d-4360-924a-159011a9379f>',
            '<urn:uuid:afdacc65-cf63-4534-86fa-0ab75ee599ac>',
            '<urn:uuid:aee15c12-20f9-494e-afe5-5882c00221d7>',
            '<urn:uuid:a7fd2025-b9ee-40da-a32a-e36878180eeb>',
            '<urn:uuid:a528bbec-ebb0-4c33-9717-cf83b8f1b9fc>',
            '<urn:uuid:a167de1c-b616-4f7a-a436-c4c3fc844f43>',
            '<urn:uuid:9fc5e8f2-6e23-4c5c-8de6-9274063fcaba>',
            '<urn:uuid:986b1c29-3b0a-42e7-9a8f-2e5d4e9e1eaa>',
            '<urn:uuid:97cae2fd-437d-49b4-8c0e-93444cc56aca>',
            '<urn:uuid:95d4507e-fa95-4a7c-a26e-93b9c90c927e>',
            '<urn:uuid:8fabc98b-e128-402e-a9a7-98f945bf7256>',
            '<urn:uuid:8e2b329b-7801-4840-9427-337880e55d48>',
            '<urn:uuid:8ba32e3a-b46f-4011-a802-162b81152ef2>',
            '<urn:uuid:87c4c853-c429-4067-8ffa-cdb80799e506>',
            '<urn:uuid:834f2086-b1ac-41bf-8297-9696265d5d44>',
            '<urn:uuid:7d561461-577a-42d2-9f23-9f2f4006c43f>',
            '<urn:uuid:7b552308-8dc5-451a-b4e6-50720739d80c>',
            '<urn:uuid:7992d810-2972-4a27-ab65-d90d29616b77>',
            '<urn:uuid:71982c79-dc70-498c-bf5e-cf4a51fcd6e7>',
            '<urn:uuid:706893af-82c5-41e5-a420-e7da9f316602>',
            '<urn:uuid:6e6aa1a3-6afe-4c76-ad52-65b75a39fd7f>',
            '<urn:uuid:6852a4a9-f464-499c-ab5a-d70da2e47ff3>',
            '<urn:uuid:66f0f8ba-8942-48ff-8d83-025af04a4243>',
            '<urn:uuid:658a1dcc-08a9-4d95-8b19-4b0d8d5e8f83>',
            '<urn:uuid:64cfc275-8f27-4cc7-b25d-6742ee0429e5>',
            '<urn:uuid:627f3a73-7c75-44a8-92c7-bc4b28e01693>',
            '<urn:uuid:5cc177a4-16aa-4cb5-9e7a-688872cbbcf3>',
            '<urn:uuid:544e0055-2287-40bd-9b73-63b424377e2f>',
            '<urn:uuid:4e6225bd-03f4-4911-b4ee-1ccf3c81e8ad>',
            '<urn:uuid:4e440d02-103e-4d21-8b3d-6604c8e41ee5>',
            '<urn:uuid:49cdb09e-7e91-447a-9dd1-b4197c053ca8>',
            '<urn:uuid:42432f7d-e798-4ba8-915e-c0658280b080>',
            '<urn:uuid:3ef94bab-9014-48d1-963a-a934f1b1821f>',
            '<urn:uuid:3c2fccbf-a5ac-45c5-b4f3-2ff0bca7c27a>',
            '<urn:uuid:3c20451f-2cc4-49ba-86c8-8e749888818f>',
            '<urn:uuid:34d16715-ac18-47c4-b149-95f64fc6bdc3>',
            '<urn:uuid:2df50872-9268-46e3-af42-fbaa776a2f9b>',
            '<urn:uuid:2d5f0101-f6cd-4de4-b794-682f3f069679>',
            '<urn:uuid:235d7d90-ee82-43c1-8815-addbe33dd7e5>',
            '<urn:uuid:22108b9c-86e8-44f0-be4c-4c1f967f4544>',
            '<urn:uuid:20c16983-e4db-46a0-9db3-aeacab9ab347>',
            '<urn:uuid:1d76f218-4d49-44da-833c-208358107fd2>',
            '<urn:uuid:15311715-54d8-4d55-a418-03e429285c47>',
            '<urn:uuid:128be561-964f-4fe0-b367-1d10d0e3247b>',
            '<urn:uuid:125dcd5f-cb95-4f76-866d-423162e18833>',
            '<urn:uuid:11fe1787-4480-40c8-a5ce-93b114a88d45>',
            '<urn:uuid:111af3aa-55cc-45e2-9169-55d3634a1f65>',
            '<urn:uuid:0f8cb2ee-b196-43c1-b693-78d313c29453>',
            '<urn:uuid:0ba18f82-fcb7-49fa-8df4-db4e181fb03b>',
            '<urn:uuid:07f0f7b0-bc64-4bb2-9f5e-8c6a83e0c138>',
            '<urn:uuid:05ecc69d-aee6-4541-ba01-041eed1ce061>'
        ]
    },
    {
        name: "Barack Obama",
        positive: 0.7,
        negative: 0.3,
        type: "person",
        texts: [
            '<urn:uuid:0071918c-c0f5-4042-90dc-88ca957847b4>',
            '<urn:uuid:04247eab-b2e6-4d88-a04f-e7e789d38b76>',
            '<urn:uuid:04ba569d-a342-496c-822a-5b19a52c536f>',
            '<urn:uuid:0503097c-efd5-40ac-9e8a-08b82d723345>',
            '<urn:uuid:0528837d-de4f-421b-9981-3c8815532971>',
            '<urn:uuid:05ecc69d-aee6-4541-ba01-041eed1ce061>',
            '<urn:uuid:067eccab-d72f-4ca3-a0b1-4786ebdfde77>',
            '<urn:uuid:07c6d846-fa5f-42fb-b303-5694929cd5b3>',
            '<urn:uuid:0816d45c-7fea-4651-8841-b728f56e6371>',
            '<urn:uuid:0c1bd62d-758d-45c1-96c1-c76cd0aeaee6>',
            '<urn:uuid:0c5dce35-62d4-46c1-8947-d3469cb50279>',
            '<urn:uuid:0fb2879f-9b4a-4f76-9ea2-d16c8fb012e2>',
            '<urn:uuid:1232aab0-5b4a-4d6b-b45a-04538589161f>',
            '<urn:uuid:1c7154a6-8b21-47b0-8fb7-a23d4e636570>',
            '<urn:uuid:1f0782ca-0fb3-45e1-b4fa-982930cee3bc>',
            '<urn:uuid:1f53d966-6f0e-4158-b759-c52aaaf31080>',
            '<urn:uuid:22154183-e6f2-4697-85e9-ecc07ed60cba>',
            '<urn:uuid:262cebae-7e7c-4aae-8a58-479cf8376a5d>',
            '<urn:uuid:2759f90c-9662-41cf-9851-07e9c7cd2c3f>',
            '<urn:uuid:2781b340-2596-44f0-b601-5e65cb954ff8>',
            '<urn:uuid:27c1f3b6-f09c-4b37-8625-5e01b08088be>',
            '<urn:uuid:28cc5fed-9b00-450f-bf0e-efd5e5b05bfb>',
            '<urn:uuid:28e27826-5d8a-42da-8460-54ff22ee9d42>',
            '<urn:uuid:2b9faf25-99ad-4c27-a200-ccec13b420f2>',
            '<urn:uuid:2c01a5c7-ca1d-4860-a8b9-91ba0f780d6c>',
            '<urn:uuid:2ceda3cc-65e2-4f99-9efe-d29182907c3a>',
            '<urn:uuid:2d32c093-3e57-4f11-a9e1-e2bce9908410>',
            '<urn:uuid:2eb714ad-7be2-44c5-8928-b523f85d83af>',
            '<urn:uuid:2f16397a-f98c-4678-ab40-2724921d2ac9>',
            '<urn:uuid:33a1fc3e-e983-40ea-903b-52473bf289d9>',
            '<urn:uuid:33b2278a-b223-46d6-9ee1-da302e1d7530>',
            '<urn:uuid:34d16715-ac18-47c4-b149-95f64fc6bdc3>',
            '<urn:uuid:3616fa22-7696-42cd-9d27-de0b06f50a51>',
            '<urn:uuid:37279a87-2546-4b22-a4bc-771775d2d308>',
            '<urn:uuid:3976e799-8a02-43b0-8fc9-2f407fe5048d>',
            '<urn:uuid:3a456de1-b0d4-44c0-95c8-2824e284e917>',
            '<urn:uuid:3beded47-ace2-41fa-8409-1658db47b9c9>',
            '<urn:uuid:3cc2b4d3-45c1-4f2e-9eb5-b2ac690de12f>',
            '<urn:uuid:3d90ecdf-a106-4757-a597-7b192a0d0ef9>',
            '<urn:uuid:3da69566-3276-497a-96a4-e453bec797a4>',
            '<urn:uuid:4183be91-7545-4c58-8b4e-ef6ebd38707f>',
            '<urn:uuid:4342f31d-efcd-487e-ad74-40b569122bfd>',
            '<urn:uuid:440f5072-130b-4728-9e12-11b15410eb91>',
            '<urn:uuid:458fe0cb-3663-4a6d-b144-25875e7c9c34>',
            '<urn:uuid:473c6616-2e22-4f22-be0f-e5c6e732bd6a>',
            '<urn:uuid:482b9335-97c8-4217-b5cc-406c99c41013>',
            '<urn:uuid:48cc5e83-da51-4689-b833-0acb364bcfba>',
            '<urn:uuid:4a107646-ed50-438b-9463-6a786766e93f>',
            '<urn:uuid:4a354922-1967-4a39-b1f2-4a02fafecf73>',
            '<urn:uuid:4a8a2758-e0cf-43e5-8adc-6ed4513771b2>',
            '<urn:uuid:4c2280ba-8461-4b94-9e40-247f5feb5867>',
            '<urn:uuid:4cbc789d-64a6-47e5-8aea-ecfa388ae832>',
            '<urn:uuid:4e0ba28c-4f35-4880-ab0d-31485652c51f>',
            '<urn:uuid:535165f6-46a4-41a0-a65b-910dcb750718>',
            '<urn:uuid:5881d0d2-f555-4c17-9b79-19b7dbf32e07>',
            '<urn:uuid:5aefce4e-fa2d-49ac-89f4-1a3b4b6148e1>',
            '<urn:uuid:5d920f43-42b5-4839-a43d-506b4878111b>',
            '<urn:uuid:632e55df-12ac-450a-abd7-61f346dc6d1c>',
            '<urn:uuid:6818de63-dd0b-4f07-8f8a-9821251d236a>',
            '<urn:uuid:69aa4e2e-82ed-4848-ad5b-8e7379e6a484>',
            '<urn:uuid:69f949c7-ef09-4455-b8bc-60a7b3de047c>',
            '<urn:uuid:6ab236ce-88cf-4c24-b20b-4049594f46d5>',
            '<urn:uuid:6ec14795-fd6e-449a-a43e-541b8e60c517>',
            '<urn:uuid:6f38a4d0-0ae5-4b36-8adb-c126ab99b4a7>',
            '<urn:uuid:74842029-7668-4dd9-8495-179f455efcbd>',
            '<urn:uuid:784d94e7-58a6-4180-855d-f37d00f186db>',
            '<urn:uuid:79e7bf76-1b45-46a6-8534-33fa404ae098>',
            '<urn:uuid:7cea271d-badb-4654-9d67-e43b03bd9f45>',
            '<urn:uuid:7e9cd4c2-be40-48eb-b558-575d33b8ef0b>',
            '<urn:uuid:7f51c1e7-34e9-4d38-80d2-c5f12d6cff96>',
            '<urn:uuid:80b035d7-ba58-4f43-b157-0aa611edf963>',
            '<urn:uuid:80e4fe51-3c2b-4694-a6f1-7f66175177ef>',
            '<urn:uuid:81f2ea9a-108c-4990-a2e3-8f319cf394d6>',
            '<urn:uuid:84511b01-bf31-4300-aa69-3952ebf0afa1>',
            '<urn:uuid:847237a9-d50e-4b23-9446-2db3e2984beb>',
            '<urn:uuid:84f7f631-530f-42f5-95c1-e03385b5d3e0>',
            '<urn:uuid:8649f3cb-5d30-45dc-baa5-1c1d6b13d316>',
            '<urn:uuid:8c2afbb6-7489-425a-8e3c-fae866f77677>',
            '<urn:uuid:8d0356b1-0bc1-493b-a28a-fe50654526b9>',
            '<urn:uuid:8e8ce39f-b617-4ab0-9264-2e4bc060541c>',
            '<urn:uuid:8fabc98b-e128-402e-a9a7-98f945bf7256>',
            '<urn:uuid:90bf9890-901c-4671-b52b-6997655b97fd>',
            '<urn:uuid:93ae8977-99d4-4b8b-a767-5486163095dd>',
            '<urn:uuid:96426250-d173-488b-8a7b-84c39b04bb3c>',
            '<urn:uuid:99588b93-c384-42f8-b7cc-42efb0b92add>',
            '<urn:uuid:9af5776c-7086-4885-8b64-4f62dd152600>',
            '<urn:uuid:9bc3602d-2cc1-40b8-958b-cb055d25c69b>',
            '<urn:uuid:a05e82ef-3cd7-41a6-8935-7b75247b7d17>',
            '<urn:uuid:a0d141b4-3ce9-4174-9e0b-15a83ebe57be>',
            '<urn:uuid:a1020b0e-6399-4212-8e21-82160a7ec311>',
            '<urn:uuid:a14b374f-849c-4bd2-b624-bb7a956afe60>',
            '<urn:uuid:a16a57c5-03b6-4e4d-b161-21f9363cbfb9>',
            '<urn:uuid:a312df84-2200-42f0-b331-762b2a246d45>',
            '<urn:uuid:a9a82519-bbf1-4eaa-9490-b3ce20769837>',
            '<urn:uuid:a9ac24c0-3ffa-4ee5-890e-2b346453895b>',
            '<urn:uuid:a9ba2c2a-2078-4e13-8293-781e04df2029>',
            '<urn:uuid:aab3e8dc-b157-456c-a9cf-c6baadd0da31>',
            '<urn:uuid:ade8aef6-bb0b-4a9d-bae0-3eb35e114768>',
            '<urn:uuid:aeadc6a8-13a3-449f-83e8-11e7d2332c72>',
            '<urn:uuid:aeb82821-912e-4dd7-99fb-1525e66dde4a>',
            '<urn:uuid:aefb242d-ac57-4ebb-b7cc-9dd11a82d362>',
            '<urn:uuid:b14bc91e-a3a3-4684-b80c-95fde25482b9>',
            '<urn:uuid:b2877ecf-ba62-4975-a4d9-b3e64feb7a06>',
            '<urn:uuid:b3058eb6-8c93-4922-9e0e-2d87853d538d>',
            '<urn:uuid:b5151832-9a3a-4c22-aaab-4122383952cb>',
            '<urn:uuid:b94b11d3-b829-44e1-a31b-f9ae5332bf2e>',
            '<urn:uuid:bdba16fa-758e-4edb-bccf-52ca717ae7f8>',
            '<urn:uuid:be1279eb-4087-46c7-b420-6b4d60eae283>',
            '<urn:uuid:c09ee4d5-a2f5-4e83-85dd-83a1ebbea526>',
            '<urn:uuid:c1d8fb35-da64-4942-bdd2-a999022c769b>',
            '<urn:uuid:c2bb865d-aff0-40fb-bb08-ddcb957e3e43>',
            '<urn:uuid:c30a1da4-6785-4b94-aa92-50c4cf4bbd8e>',
            '<urn:uuid:c5a74e77-698b-4238-832f-797f0fcacbf1>',
            '<urn:uuid:c660ac71-aeaa-4fb3-91af-a25f9468deec>',
            '<urn:uuid:c6987d74-8b33-4260-a585-6e7f3ded2f10>',
            '<urn:uuid:c69dfa1b-dd9f-4011-8bb7-df5c6afaf8d5>',
            '<urn:uuid:c77046b4-0ec4-4ea8-8f99-d59c57bd0a99>',
            '<urn:uuid:c8f780e6-ed61-4ba4-a009-42bdbfe51a1c>',
            '<urn:uuid:c9835038-565d-436c-9849-163b1747f4de>',
            '<urn:uuid:c98eff33-68a0-4a77-936f-78024aaaf3a0>',
            '<urn:uuid:ca0fc6c5-8628-4e55-984a-90c03936b2a2>',
            '<urn:uuid:ca7598aa-e4dd-42cd-888a-bb1000d948a6>',
            '<urn:uuid:cabb2b23-2908-4a20-aa2f-251b0cefa4b9>',
            '<urn:uuid:cf1be252-9844-49d7-bcd1-04c8c619b454>',
            '<urn:uuid:cfca0c52-8b5b-4c98-96c2-bfbc73608dbf>',
            '<urn:uuid:d0e0fe8e-9993-49e4-929d-fe8b76623a95>',
            '<urn:uuid:d174a773-1b7e-4db3-a67e-9c46cca04021>',
            '<urn:uuid:d401fd98-3aaa-42ad-85dc-36d4f56035b7>',
            '<urn:uuid:d64fd8cb-6489-4fb2-be9f-175de7e66e2f>',
            '<urn:uuid:d71dd0c8-e9e9-48a5-b49a-5f05f0400e20>',
            '<urn:uuid:d727eb7c-5fbd-42f2-ab9f-be9a3f7d93eb>',
            '<urn:uuid:d72b4337-f1d6-425a-ba5c-dedc757f32ff>',
            '<urn:uuid:d8ce30a4-bf9a-4795-afa4-4007ff1106e5>',
            '<urn:uuid:dadedbf0-931f-43f8-b405-4317ac57b8b4>',
            '<urn:uuid:dd518aeb-8e0e-407e-96e4-c3a9c679e90c>',
            '<urn:uuid:e0b42477-aea2-448a-a366-222bebeabeb1>',
            '<urn:uuid:e2648d01-4664-4e90-b460-718cfeaacb74>',
            '<urn:uuid:e79cc7b5-be1a-475e-b5e2-86dfd06c8026>',
            '<urn:uuid:e807b152-e688-451b-80d2-c818a41c61ee>',
            '<urn:uuid:e8f3d294-1050-48dc-98df-ac58a4a9cf36>',
            '<urn:uuid:ea1bea65-21c9-4f2f-a1f1-f7da48c526bb>',
            '<urn:uuid:eabe0daf-4689-466d-930e-2d990499c425>',
            '<urn:uuid:ec8d576d-6ec2-473c-b5c7-83e7b9c56431>',
            '<urn:uuid:ee682852-0584-4b4e-a11f-fdcde3c4791b>',
            '<urn:uuid:f22b6e6c-6358-4670-9dbd-ccefbd62b19a>',
            '<urn:uuid:f2510298-59d8-442f-bcf0-15760114dcff>',
            '<urn:uuid:f25d4d0c-6e4e-460a-b3a5-3d99354795fd>',
            '<urn:uuid:f2afb9ef-8cf4-4433-84cc-58f5a4565c65>',
            '<urn:uuid:f5fe449e-835f-43c1-ae7b-99981cccd4c2>',
            '<urn:uuid:fa52df5a-5c4d-476e-9929-e55fdb9001e8>',
            '<urn:uuid:faadc749-a5c0-42c1-ba01-94f3353c00cf>',
            '<urn:uuid:fabc9485-da55-4643-b18a-5307f5cb81bd>',
            '<urn:uuid:fad27476-5032-4618-9248-2120f45ddda6>'
        ]
    },
    {
        name: "Tesla",
        positive: 0.9,
        negative: 0.1,
        type: "organization",
        texts: [
            '<urn:uuid:52027c05-2a0c-48e0-8394-e2a1bfa599c3>',
            '<urn:uuid:523b64b5-0c81-4ad3-a5f6-c9c3efba8a22>',
            '<urn:uuid:555dd11f-83c2-4ee1-81b3-3a81b4260da0>',
            '<urn:uuid:5fc6eae7-fe23-4258-867c-983f26a0b2ad>',
            '<urn:uuid:8a17deea-79f3-4e24-92c8-f72727a44622>',
            '<urn:uuid:9496add5-5b5d-48c4-9ae5-41349badb496>',
            '<urn:uuid:957f9de9-f288-420e-a52c-f7b0cc74d960>',
            '<urn:uuid:a2bf435f-2f1f-4a36-854d-2fa92127df63>',
            '<urn:uuid:a351c5f2-dc72-4a5c-9fc7-96e4c46361d3>',
            '<urn:uuid:a96faa54-6c15-4f19-b251-76a4aa8d36a9>',
            '<urn:uuid:c0fc8f82-d6c6-49b2-96e9-1a5f3ed98971>',
            '<urn:uuid:cab6bacc-a33c-4494-8379-046991c4b24c>',
            '<urn:uuid:cf314af2-64aa-4deb-86db-4ec8c19fdfde>',
            '<urn:uuid:d62eb98b-27f7-4339-8562-360273e881fa>',
            '<urn:uuid:dded89fa-6d30-4531-97fa-d67224330e8d>',
            '<urn:uuid:e0810a10-fc56-4bd3-91d6-362ab0f2b54f>',
            '<urn:uuid:ef105d35-a341-42ff-a31e-7fdaafa2e6b4>',
            '<urn:uuid:f2466e7e-e0b2-420a-8852-a9d5005ed8a6>',
            '<urn:uuid:fbb0b197-ac8f-4151-bc4f-5ec0a39380e9>'
        ]
    },
    {
        name: "Whatsapp",
        positive: 0.4,
        negative: 0.6,
        type: "organization",
        texts: [
            '<urn:uuid:32b4e6c1-505b-446b-814a-e8a204b60cb1>',
            '<urn:uuid:3abaf550-3601-4270-aae0-6ae10b6c490d>',
            '<urn:uuid:9e5aee16-6fca-4d20-a622-cc60d6308dd2>',
            '<urn:uuid:9e7d87c5-1a81-47ca-8856-6041f601da3a>',
            '<urn:uuid:a490171f-c5f5-4b4c-b747-a6a0be1802ff>'
        ]
    }
];

var currentWidth = $('#bubbles').width();

var w = 1280,
    h = 800;

var nodes = SAMPLE_DATA.map(function (entity) {
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            entity: entity
        };
    }),
    color = d3.scaleLinear()
        .domain([0, 1])
        .range(["red", "lime"])
        .interpolate(d3.interpolateHcl);

var center = {x: currentWidth / 2, y: (currentWidth * h / w) / 2};

var simulation = d3.forceSimulation()
    .velocityDecay(0.2)
    .alphaDecay(0)
    .force('x', d3.forceX().strength(0.002).x(center.x))
    .force('y', d3.forceY().strength(0.002).y(center.y))
    .force("collide", d3.forceCollide().radius(function (d) {
        return d.entity.texts.length;
    }).iterations(2))
    .nodes(nodes)
    .on("tick", tick);

var svg = d3.select("#bubbles").append("svg:svg")
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + w + " " + h)
    .attr("width", currentWidth)
    .attr("height", currentWidth * h / w);

$(window).resize(function () {
    currentWidth = $("#bubbles").width();
    svg.attr("width", currentWidth);
    svg.attr("height", currentWidth * h / w);
});

var selectedEntity;
var selectedText = 0;

var gEnter = svg.selectAll("g")
    .data(nodes)
    .enter()
    .append("g")
    .on("click", function (d) {
        $("g").removeClass("selected");
        $(this).addClass("selected");

        selectedText = 0;
        selectedEntity = d.entity;
        loadText();
    })
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

gEnter.append("circle")
    .attr("r", function (d) {
        return d.entity.texts.length;
    })
    .style("fill", function (d) {
        return color(d.entity.positive);
    });

gEnter.append("text")
    .text(function (d) {
        return d.entity.name;
    })
    .style("text-anchor", "middle")
    .style("font-size", "25");

function dragstarted(d) {
    d.drag = true;
    $(this).addClass("active");
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    d.drag = false;
    $(this).removeClass("active");
    d.fx = null;
    d.fy = null;
}

function tick() {
    svg.selectAll("circle")
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });
    svg.selectAll("text")
        .attr("x", function (d) {
            return d.x;
        })
        .attr("y", function (d) {
            return d.y;
        });
}

function nextText() {
    if (selectedEntity && selectedText < selectedEntity.texts.length - 1) {
        selectedText++;
        loadText();
    }
}

function previousText() {
    if (selectedEntity && selectedText > 0) {
        selectedText--;
        loadText();
    }
}

function loadText() {
    $.get('http://localhost:8080/text', {id: selectedEntity.texts[selectedText]}, function (str) {
        var find = selectedEntity.name;
        var re = new RegExp(find, 'g');
        $("#text").html(str.replace(re, "<b>" + find + "</b>"));
    })
}