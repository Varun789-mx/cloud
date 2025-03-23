export interface Env { 
}

export default { 
	async fetch (request:Request,env:Env,ctx:ExectionContext):Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method); 

		if (request.method === "GET") { 
			return Response.json({
				message:"We got a Get reqest"
			});
		}
		else { 
			return Response.json({
				message:"Get request not received"
			});
		}

	},
}

