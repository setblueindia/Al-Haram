export const responsecode = {
    "result": "1",
    "1": "Approved, Pending for Authorisation",
    "0": "Transaction Successful",
    "001": "Approved, Pending for Authorisation",
    "101": "Field is blank in a request",
    "102": "Internal Mapping for ISO not set",
    "103": "ISO message field configuration not found",
    "104": "Response Code not found in ISO message",
    "105": "Problem while creating or parsing ISO Message",
    "201": "Terminal does not exists",
    "202": "Merchant does not exists",
    "203": "Institution does not exists",
    "204": "Card prefix is not belong to corresponding card Type",
    "205": "Card not allowed for this transaction",
    "206": "Negative IP, Customer is not allowed to perform Transaction",
    "207": "Original Transaction not found",
    "208": "Transaction Flow not set for Transaction Type",
    "209": "Terminal status is Deactive, Transaction Declined",
    "210": "Terminal status is Closed, Transaction Declined",
    "211": "Terminal status is Invalid, Transaction Declined",
    "212": "Merchant status is Deactive, Transaction Declined",
    "213": "Merchant status is Closed, Transaction Declined",
    "214": "Merchant status is Invalid, Transaction Declined",
    "215": "Institution status is Deactive, Transaction Declined",
    "216": "Institution status is Closed, Transaction Declined",
    "217": "Institution status is Invalid, Transaction Declined",
    "218": "MOD10 Check Failed",
    "219": "Card Type not supported by Merchant",
    "220": "CVV Check Failed, CVV value not present",
    "221": "AVS Capture Check Failed, Could not find Customer Address",
    "222": "Customer Info Check failed, Could not find Customer Information",
    "223": "Card expiry date is not greater than current date",
    "224": "Invalid Login Attempts exceeded",
    "225": "Wrong Terminal password, Please Re-Initiate transaction",
    "226": "Negative Country, Customer is not allowed to perform Transaction",
    "227": "Card type not supported by institution",
    "228": "Multiple captures not allowed",
    "301": "Transaction is not allowed for given Terminal",
    "302": "ransaction is not allowed for given Merchant",
    "303": "Transaction is not allowed for given Institution",
    "304": "Currency not supported for given Terminal",
    "305": "Currency not supported for given Merchant",
    "306": "Currency not supported for given Institution",
    "307": "Velocity Check Failed, Velocity Profile not found, Level - Terminal",
    "308": "Velocity Check Failed, Velocity Profile not found, Level - Merchant",
    "309": "Velocity Check Failed, Velocity Profile not found, Level - Institution",
    "310": "Transaction Profile not set for Terminal, Unable to check Transaction Profile",
    "311": "Transaction Profile not set for Merchant, Unable to check Transaction Profile",
    "312": "Transaction Profile not set for Institution, Unable to check Transaction Profile",
    "313": "Currency Profile not set for Terminal, Unable to check Currency Profile",
    "314": "Currency Profile not set for Merchant, Unable to check Currency Profile",
    "315": "Currency Profile not set for Institution, Unable to check Currency Profile",
    "316": "elocity Profile not set for Terminal, Unable to check Velocity Profile",
    "317": "Velocity Profile not set for Merchant, Unable to check Velocity Profile",
    "318": "Velocity Profile not set for Institution, Unable to check Velocity Profile",
    "319": "Refund Limit exceeds for Terminal",
    "320": "Refund Limit exceeds for Merchant",
    "321": "Refund Limit exceeds for Institution",
    "322": "Velocity Check Failed, Transaction amount below Minimum amount allowed, Level – Terminal",
    "323": "Velocity Check Failed, Transaction amount below Minimum amount allowed, Level – Merchant",
    "324": "Velocity Check Failed, Transaction amount below Minimum amount allowed, Level – Institution",
    "325": "Velocity Check Failed, Transaction amount exceeds Maximum amount allowed, Level – Terminal",
    "326": "Velocity Check Failed, Transaction amount exceeds Maximum amount allowed, Level – Merchant",
    "327": "Velocity Check Failed, Transaction amount exceeds Maximum amount allowed, Level – Institution",
    "328": "Velocity Check Failed, Level - Terminal",
    "329": "Velocity Check Failed, Level - Merchant",
    "330": "Velocity Check Failed, Level - Institution",
    "331": "Velocity Check Failed, Transaction exceeds, Daily Total transaction count, Level – Terminal",
    "332": "Velocity Check Failed, Transaction exceeds, Daily Total transaction count, Level – Merchant",
    "333": "Velocity Check Failed, Transaction exceeds, Daily Total transaction count, Level – Institution",
    "334": "Velocity Check Failed, Transaction amount exceeds, Daily Total transaction amount allowed, Level - Terminal",
    "335": "Velocity Check Failed, Transaction amount exceeds, Daily Total transaction amount allowed, Level - Merchant",
    "336": "Velocity Check Failed, Transaction amount exceeds, Daily Total transaction amount allowed, Level - Institution",
    "337": "Velocity Check Failed, Transaction exceeds Total transaction count of this Card, Level – Terminal",
    "338": "Velocity Check Failed, Transaction exceeds Total transaction count of this Card, Level – Merchant",
    "339": "Velocity Check Failed, Transaction exceeds Total transaction count of this Card, Level – Institution",
    "340": "Velocity Check Failed, Transaction exceeds, Weekly Total transaction count, Level – Terminal",
    "341": "Velocity Check Failed, Transaction exceeds, Monthly Total transaction count, Level – Terminal",
    "342": "Velocity Check Failed, Transaction exceeds, Weekly Total transaction count, Level – Merchant",
    "343": "Velocity Check Failed, Transaction exceeds, Monthly Total transaction count, Level – Merchant",
    "344": "Velocity Check Failed, Transaction exceeds, Weekly Total transaction count, Level – Institution",
    "345": "Velocity Check Failed, Transaction exceeds, Monthly Total transaction count, Level – Institution",
    "346": "Velocity Check Failed, Transaction amount exceeds, Weekly Total transaction amount allowed, Level - Terminal",
    "347": "Velocity Check Failed, Transaction amount exceeds, Monthly Total transaction amount allowed, Level - Terminal",
    "348": "Velocity Check Failed, Transaction amount exceeds, Weekly Total transaction amount allowed, Level - Merchant",
    "349": "Velocity Check Failed, Transaction amount exceeds, Monthly Total transaction amount allowed, Level - Merchant",
    "350": "Velocity Check Failed, Transaction amount exceeds, Weekly Total transaction amount allowed, Level - Institution",
    "351": "Velocity Check Failed, Transaction amount exceeds, Monthly Total transaction amount allowed, Level - Institution",
    "401": "Destination is not configured",
    "402": "Can not lookup Destination to send message",
    "403": "Unable to route Message to Destination",
    "404": "Unable to get routing details",
    "405": "Destination does Not Logged on",
    "501": "Refer to card issuer",
    "502": "Refer to card issuer, special condition",
    "503": "Invalid Merchant or Service Provider",
    "504": "Pick-up card",
    "505": "Do not honour",
    "506": "Error",
    "507": "Pick-up card, special condition",
    "508": "Honour with identification",
    "509": "Request in progress",
    "510": "Approved, partial",
    "511": "Approved, VIP",
    "512": "Invalid transaction",
    "513": "Invalid amount",
    "514": "Invalid card number",
    "515": "No such issuer",
    "516": "Approved, update track 3",
    "517": "Operator Cancelled",
    "518": "Customer dispute",
    "519": "Re enter transaction",
    "520": "Invalid response",
    "521": "No action taken",
    "522": "Suspected malfunction",
    "523": "Unacceptable transaction fee",
    "524": "File update not supported",
    "525": "Unable to locate record",
    "526": "Duplicate record",
    "527": "File update edit error",
    "528": "File update file locked",
    "530": "File update failed",
    "531": "Bank not supported",
    "532": "Completed partially",
    "533": "Expired card, pick-up",
    "534": "Suspected fraud, pick-up",
    "535": "Contact acquirer, pick-up",
    "536": "Restricted card, pick-up",
    "537": "Call acquirer security, pick-up",
    "538": "PIN tries exceeded, pick-up",
    "539": "No credit account",
    "540": "Function not supported",
    "541": "Lost card (Contact Bank)",
    "542": "No universal account",
    "543": "Stolen card",
    "544": "No investment account",
    "551": "Not sufficient funds (Client to Contact Bank)",
    "552": "No check account",
    "553": "No savings account",
    "554": "Expired card (Contact Bank)",
    "555": "Incorrect PIN",
    "556": "No card record",
    "557": "Transaction not permitted to cardholder",
    "558": "Transaction not permitted on terminal",
    "559": "uspected fraud",
    "560": "Contact acquirer",
    "561": "Exceeds withdrawal limit",
    "562": "Restricted card",
    "563": "Security violation",
    "564": "Original amount incorrect",
    "565": "Exceeds withdrawal frequency",
    "566": "Call acquirer security",
    "567": "Hard capture",
    "568": "Response received too late",
    "575": "PIN tries exceeded",
    "576": "Approved country club",
    "577": "Intervene, bank approval required",
    "578": "Original transaction could not be found",
    "579": "approved administrative transaction",
    "580": "Approved national negative file hit OK",
    "581": "Approved commercial",
    "582": "No security module",
    "583": "No accounts",
    "584": "No PBF",
    "585": "PBF update error",
    "586": "Invalid authorisation type",
    "587": "Bad Track 2 bank offline",
    "588": "PTLF error",
    "589": "Invalid route service",
    "590": "Cut-off in progress",
    "591": "Issuer or switch inoperative",
    "592": "Routing error",
    "593": "Violation of law",
    "594": "Duplicate transaction",
    "595": "Reconcile error",
    "596": "Communication System malfunction",
    "597": "Communication Error",
    "598": "Exceeds cash limit",
    "599": "Host Response,Please check bank response code",
    "5N0": "Unable to authorise / Card type incorrect",
    "5N1": "Invalid PAN length",
    "5N2": "Preauthorisation full",
    "5N3": "Maximum online refund reached",
    "5N4": "Maximum off-line refund reached",
    "5N5": "Maximum credit per refund",
    "5N6": "Maximum refund credit reached",
    "5N7": "Decline for cvv2 failure",
    "5N8": "ver floor limit",
    "5N9": "Maximum number refund credits",
    "5O0": "Referral file full",
    "5O1": "NEG file problem",
    "5O2": "Advance less than minimum",
    "5O3": "Delinquent",
    "5O4": "Over limit table",
    "5O5": "PIN required",
    "5O6": "Mod 10 check",
    "5O7": "Force post",
    "5O8": "Bad PBF",
    "5O9": "NEG file problem",
    "5P0": "CAF problem",
    "5P1": "Over daily limit",
    "5P2": "CAPF not found",
    "5P3": "Advance less than minimum",
    "5P4": "Number of times used",
    "5P5": "Delinquent",
    "5P6": "ver limit table",
    "5P7": "Advance less than minimum",
    "5P8": "Administrative card needed",
    "5P9": "Enter lesser amount",
    "5Q0": "Invalid transaction date",
    "5Q1": "Invalid expiration date",
    "5Q2": "Invalid transaction code",
    "5Q3": "Advance less than minimum",
    "5Q4": "Number of times used",
    "5Q5": "Delinquent",
    "5Q6": "Over limit table",
    "5Q7": "Amount over maximum",
    "5Q8": "Administrative card not found",
    "5Q9": "Administrative card not allowed",
    "5R0": "Approved administrative request",
    "5R1": "Approved administrative request",
    "5R2": "Approved administrative request",
    "5R3": "Charge back-customer file updated",
    "5R4": "Charge back-customer file updated -acquirer not found",
    "5R5": "Charge back-incorrect prefix number",
    "5R6": "Charge back-incorrect response code or CPF configuration",
    "5R7": "Administrative transactions not supported",
    "5R8": "Card on national negative file",
    "5S4": "PTLF full",
    "5S5": "Charge back-approved, customer file not updated",
    "5S6": "Charge back-approved, customer file not updated, acquirer not found",
    "5S7": "Charge back-accepted, incorrect destination",
    "5S8": "ADMN file problem",
    "5S9": "Unable to validate PI",
    "5T1": "Invalid credit card advance amount",
    "5T2": "Invalid transaction date",
    "5T3": "Card not supported",
    "5T4": "Amount over maximum",
    "5T5": "CAF status = 0 or 9",
    "5T6": "Bad UAF",
    "5T7": "Cash back exceeds daily limit",
    "5T8": "Multiple invalid required fields",
    "600": "Timeout from PG Service",
    "601": "System Error, Please contact System Admin.",
    "602": "System Error,Please try again",
    "603": "Transaction timed out.",
    "604": "Invalid Card Number.",
    "605": "Invalid CVV.",
    "606": "Invalid Track Id.",
    "607": "Invalid Terminal Id.",
    "608": "Invalid Address.",
    "609": "Invalid Terminal Password.",
    "610": "Invalid Action Code.",
    "611": "Invalid Currency Code.",
    "612": "Invalid Transaction Amount.",
    "613": "Invalid Transaction Reference.",
    "614": "Invalid User Fields.",
    "615": "Invalid City.",
    "616": "Invalid characters encountered.",
    "617": "Invalid Card Expiry Date.",
    "618": "Invalid State",
    "619": "Invalid Country",
    "620": "Invalid Cardholder Name.",
    "621": "Invaild Zip Code.",
    "622": "Invalid IP Address.",
    "623": "Invalid Email Address.",
    "624": "Transaction canceled by the user.",
    "625": "3D Secure Check Failed, Cannot continue transaction",
    "626": "Invalid CVV,CVV Mandatory.",
    "627": "Capture not allowed, Mismatch in Capture and Original Auth Transaction Amount.",
    "628": "Transaction has not been Captured/Purchase, Refund not allowed.",
    "629": "Refund Amount exceeds the Captured/Purchase Amount.",
    "630": "Transaction is Void, Capture not allowed.",
    "631": "Transaction has been Captured, Void Auth not allowed.",
    "632": "Original Transaction not found.",
    "633": "Transaction already Refunded, Duplicate refund not allowed.",
    "634": "Transaction is Void, Refund not allowed.",
    "635": "Transaction has been Captured, Multiple captures not allowed.",
    "636": "Transaction has been Voided , Multiple voids not allowed.",
    "637": "A purchase transaction cannot be captured. It should be an Auth transaction.",
    "638": "Purchase transaction cannot be Voided.",
    "639": "Invalid Void Transaction, Void and Original Auth Transaction Amount mismatched.",
    "640": "Refund transaction in progress, Cannot process duplicate transaction",
    "641": "Capture transaction in progress, Cannot process duplicate transaction",
    "642": "Void Auth transaction in progress, cannot process duplicate transaction",
    "644": "Transaction is fully refunded, refund not allowed",
    "645": "Transaction is chargeback transaction, refund not allowed",
    "646": "Transaction is chargeback transaction, refund amount exceeds allowed amount",
    "647": "Invalid subscription type",
    "648": "Invalid payment type",
    "649": "Invalid payment cycle",
    "650": "Invalid payment start date",
    "651": "Invalid payment days",
    "652": "Invalid payment Method",
    "653": "Terminal not allow for recurring payment",
    "654": "Invalid Recurring Amount",
    "655": "Invalid payment type",
    "656": "Invalid No of recurring payment",
    "657": "Recurring cycle limit exceeds, cannot set reincurring for more than 2 years",
    "658": "Amount 0.00 is not supported for Pre-auth transaction",
    "659": "Message Authentication Failed",
    "699": "Transaction timed out from bank",
    "660": "Invalid tran message id",
    "661": "Invalid original action code",
    "662": "Original transaction was done by different terminal",
    "663": "Transaction inquiry failed",
    "664": "Currency Code is not matching with transaction currency",
    "665": "TrackId is not matching with transaction trackid",
    "670": "Transaction has been Refunded, Void Purchase not allowed",
    "671": "Void Purchase not allowed for PreAuth Transaction",
    "672": "Transaction is Purchase, Void Refund not allowed",
    "673": "Transaction is Pre-Auth, Void Refund not allowed",
    "674": "Transaction is Void Purchase, Void Refund not allowed",
    "675": "Transaction is Capture, Void Refund not allowed",
    "676": "Transaction is Void Auth, Void Refund not allowed",
    "677": "Void Purchase not allowed, Mismatch in Void Purchase and Original Purchase Transaction Amount",
    "678": "Void Refund not allowed, Mismatch in Void Refund and Original Refund Transaction Amount",
    "699": "Transaction timed out from bank",
    "799": "TM time out",
    "901": "Merchant not authorize to perform toknization request",
    "902": "Toknization not enabled for Merchant",
    "903": "Error In 3D Authentication of Tokenize request",
    "904": "Invalid Tokenize ressponse",
    "905": "Invalid Token operation"
};