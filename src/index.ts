export interface Env { 
}

export default { 
	async fetch (request:Request,env:Env,ctx:ExecutionContext):Promise<Response> {
		console.log(request.body);

		if (request.method === "GET") { 
			return Response.json({
				message:"Here we got"
			});
		}
		else { 
			return Response.json({
				message:"Get request not received"
			});
		}

	},
}

