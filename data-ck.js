function init(){var e;transactions=document.getElementById("transactions").value;value=document.getElementById("value").value;dankort=document.getElementById("dankort").checked;visamc=document.getElementById("visamc").checked;jcb=!1;dankortfrekvens=80;cards=[{name:"Dankort",logo:"dankort.png"},{name:"eDankort",logo:"edankort.png"},{name:"Visa",logo:"visa.png"},{name:"Visa Electron",logo:"visaelectron.png"},{name:"MasterCard",logo:"mastercard.gif"},{name:"Maestro",logo:"maestro.png"},{name:"Diners",logo:"diners.gif"},{name:"JCB",logo:"jcb.gif"},{name:"UnionPay",logo:"unionpay.gif"},{name:"American Express",logo:"amex.png"},{name:"Discover",logo:"discover.png"}];acquirer=[{name:"nets",logo:1,cards:[0,1],setupFee:250,monthlyFee:83.33,fixedTransactionFee:.7,variableTransactionFee:0,transactionCosts:0,totalCosts:0},{name:"SEB",logo:2,cards:[2,3,4,5,6],setupFee:0,monthlyFee:200,fixedTransactionFee:0,variableTransactionFee:2.65,transactionCosts:0,totalCosts:0},{name:"Teller",logo:3,cards:[2,3,4,5,6,7,8,9],setupFee:1e3,monthlyFee:100,fixedTransactionFee:0,variableTransactionFee:1.5,transactionCosts:0,totalCosts:0},{name:"SWE Bank",logo:4,cards:[2,3,4,5,6],setupFee:1900,monthlyFee:100,fixedTransactionFee:0,variableTransactionFee:1.7,totalTransactionCosts:0,totalCosts:0},{name:"Handelsbanken",logo:5,cards:[2,3,4,5,6],setupFee:1900,monthlyFee:100,fixedTransactionFee:0,variableTransactionFee:1.7,totalTransactionCosts:0,totalCosts:0}];PSP=[{name:"paypal",logo:6,link:"paypal.com",cards:[2,3,4,5,9,10],setupFee:0,monthlyFee:0,fixedTransactionFee:2.6,variableTransactionFee:3.4,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ewire",logo:4,link:"ewire.dk",cards:[0,2,3,4,5],setupFee:1195,monthlyFee:99.58,fixedTransactionFee:.7,variableTransactionFee:2.45,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ewire",logo:4,link:"ewire.dk",cards:[0,2,3,4,5],setupFee:395,monthlyFee:0,fixedTransactionFee:1.1,variableTransactionFee:2.45,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"skrill",logo:8,link:"skrill.com",cards:[2,3,4,6,7,9],setupFee:0,monthlyFee:148.75,fixedTransactionFee:1.86,variableTransactionFee:1.9,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"quickpay",logo:7,link:"quickpay.dk",acquirer:1,availableAcquirers:[1,2,3],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:0,monthlyFee:150,fixedTransactionFee:0,variableTransactionFee:0,freeTransactions:500,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ePay Light",logo:3,link:"epay.dk",acquirer:0,availableAcquirers:[0],cards:[0,1],setupFee:399,monthlyFee:99,fixedTransactionFee:.25,variableTransactionFee:0,freeTransactions:500,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ePay Business",logo:3,link:"epay.dk",acquirer:1,availableAcquirers:[1,2,3],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:999,monthlyFee:299,fixedTransactionFee:.25,variableTransactionFee:0,freeTransactions:500,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"ePay Pro",logo:3,link:"epay.dk",acquirer:2,availableAcquirers:[2],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:599,monthlyFee:199,fixedTransactionFee:.25,variableTransactionFee:0,freeTransactions:500,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"DIBS Entrepreneur",logo:2,link:"dibs.dk",acquirer:0,availableAcquirers:[0],cards:[0,1],setupFee:0,monthlyFee:149,fixedTransactionFee:3,variableTransactionFee:0,freeTransactions:250,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"DIBS Business",logo:2,link:"dibs.dk",acquirer:1,availableAcquirers:[1,2,3],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:0,monthlyFee:249,fixedTransactionFee:3,variableTransactionFee:0,freeTransactions:500,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"DIBS Professional",logo:2,link:"dibs.dk",acquirer:1,availableAcquirers:[1,2,3],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:0,monthlyFee:249,fixedTransactionFee:1.5,variableTransactionFee:0,freeTransactions:500,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Netaxept start",logo:5,link:"terminalshop.dk",acquirer:1,availableAcquirers:[2],cards:[0,1,2,3,4],setupFee:1e3,monthlyFee:180,fixedTransactionFee:1.5,variableTransactionFee:0,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Netaxept plus",logo:5,link:"terminalshop.dk",acquirer:2,availableAcquirers:[2],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:3e3,monthlyFee:500,fixedTransactionFee:1,variableTransactionFee:0,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Netaxept advanced",logo:5,link:"terminalshop.dk",acquirer:2,availableAcquirers:[2],cards:[0,1,2,3,4,5,6,7,8,9],setupFee:7500,monthlyFee:700,fixedTransactionFee:.7,variableTransactionFee:0,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Dandomain",logo:1,link:"dandomain.dk/produkter/betalingssystem.html",acquirer:2,availableAcquirers:[2],cards:[0,2,3,4,5,6,7,9],setupFee:298,monthlyFee:198,fixedTransactionFee:0,variableTransactionFee:0,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0},{name:"Wannafind",logo:9,link:"wannafind.dk/betalingsgateway/",acquirer:1,availableAcquirers:[1,2,3],cards:[0,1,2,3,4,5],setupFee:0,monthlyFee:198,fixedTransactionFee:0,variableTransactionFee:0,freeTransactions:0,transactionCosts:0,costs:0,totalSetupFee:0,totalMonthlyFee:0,totalTransactionCosts:0,totalCosts:0}];oms=transactions*value;if(transactions>500){e=0;if(transactions<601)e=(transactions-500)*.5;else if(transactions<1001)e=50+(transactions-600)*.4;else if(transactions<3001)e=210+(transactions-1e3)*.3;else if(transactions<10001){e=810;e+=(transactions-3e3)*.25}else if(transactions<30001){e=2560;e+=(transactions-1e4)*.15}else{e=5560;e+=(transactions-3e4)*.1}PSP[4].fixedTransactionFee=e/(transactions-500)}calc()};