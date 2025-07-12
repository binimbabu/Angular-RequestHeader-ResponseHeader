Http calls are asynchronous calls which will hit the network and get the data from the server or from the database. Http calls (eg: get, put, patch, delete, update) are asynchronous data and handle asynchronous data by observable pattern.
 
In the context of REST APIs, the PUT and PATCH methods are both used for updating resources, but they differ in their approach. PUT replaces the entire resource with the data provided in the request, while PATCH modifies only the specific fields provided in the request, leaving the rest of the resource unchanged. 

Http Request header
Http Request Headers are used to pass header as key value to the backend.

Http Request headers have method like ‘set’ which is used to set key and a value along with the initial header. 

const httpHeaders = new HttpHeaders({
Authorization': 'Sample Auth Token'
})
return this.http.get('https://jsonplaceholder.typicode.com/todos', {
headers : httpHeaders
});



Http Request header with append method with the already existing key will append the previous value and the new value along with the already existing key. 

const httpHeaders = new HttpHeaders({
'Authorization': 'Sample Auth Token'
})
const updatedHeader = httpHeaders.set('channel', 'Bini');
return this.http.get('https://jsonplaceholder.typicode.com/todos', {
headers : updatedHeader
});


Http Request header which has key channel with value ‘Babu’ , and the header is set with  Bini then the initial value (Babu) will be replaced with (Bini)

const httpHeaders = new HttpHeaders({
'Authorization': 'Sample Auth Token',
channel: 'Babu'
})
const updatedHeader = httpHeaders.set('channel', 'Bini');
return this.http.get('https://jsonplaceholder.typicode.com/todos', {
headers : updatedHeader
});
}


Http Request header with get and passing key as argument the value assigned to key will be available.

const httpHeaders = new HttpHeaders({
'Authorization': 'Sample Auth Token',
channel: 'Babu'
})
const updatedHeader = httpHeaders.set('channel', 'Bini');
httpHeaders.get('channel');
return this.http.get('https://jsonplaceholder.typicode.com/todos', {
headers : updatedHeader
});
}


Http Response header
Http Response Header are used when you download a video and you want to get the file name of the video downloaded. Servers wont sent the filename to preview int the network tab instead they provide the static data (eg: here filename of video) into the response header. When the filename before downloaded the backend team will pass the filename as response along with the api where the filename we are going to download.
Http Response Header are used to capture data passed along with the api as response

return this.http.get('https://jsonplaceholder.typicode.com/todos', {
observe: 'response'
})

To get the header value in ts file we will pass the options as 

{
observe: 'response'
}


observe not only observe the result or the payload provided by the api call, but also observes the response headers


this.apiService.getToUsers().subscribe((data: HttpResponse<any>)=>{
console.log("Data", data.body);
console.log("Headers", data.headers.keys());
})

When ‘data: HttpResponse<any>’ is given the data from the api is available only if we provide  data.body.
To get all the keys from the Response headers we use to give ‘data.headers.keys()’
To get a key with one particular key ‘content-type’ 
‘data.headers.get('content-type')’

To get all the key values we can loop through the for loop

data.headers.keys().forEach((key: any)=>{
console.log(data.headers.get(key));
})

