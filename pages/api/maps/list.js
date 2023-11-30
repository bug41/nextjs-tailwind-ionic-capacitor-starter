
import { db } from "/lib/db";

 export default async function handler(req,res) {
    
    //const {_id} = req.query;

    if(req.method == 'GET'){        

        const { page, itemsPerPage } = req.query;        
        const skip = (page - 1) * itemsPerPage;

        /*
            const user = await prisma.user.findUnique({
            where: {
                email: 'elsa@prisma.io',
            },
            })

            findMany()
        */        

        const result = await db.shops.findMany({
            skip : parseInt(skip),
            take: parseInt(itemsPerPage)  ,
            where: {
                useYn: {
                    contains: 'Y',
                },
                type: {
                    contains: 'S',
                },
              },
        });        
        res.status(200).json(result)

    }else{

        console.log(res.status(400).json('잘못된 요청입니다.'))
    }
}   