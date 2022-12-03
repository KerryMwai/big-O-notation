class Calcultor{
    constructor(a,d,l,n,r){
        this.a=a;
        this.d=d;
        this.l=l;
        this.n=n;
        this.r=r;
    }
    // Arithmetic progression
        // Find nth term of the AP
        findNthTerm(){
            let nThTerm=(this.a+(this.n-1)*this.d);
            console.log(nThTerm);
        }

        // findNthTerm(1,148,3)

        //Finding the n position of the nth term

        findNthPosition(){
            let n=((this.l-this.a+this.d)/this.d)
            console.log(n);
        }

        // findNthPosition(1,442,3)

        // Find the sum of n values of an AP
        // When all arguments are provided
        findTheSum(){
            let sum=(this.n/2)*(2*this.a+(this.n-1)*this.d);
            console.log(sum);
        }

        // findTheSum(1,148,3)

        // Sum when n value is not provided

        computeTotal(){
            let n=((this.l-this.a+this.d)/this.d);
            let sum=(this.n/2)*(2*this.a+(this.n-1)*this.d);
            console.log(sum);
        }

        // computeTotal(6,3,30);

        // Geometric Progression

        // Find nth term
        findnOfGP(){
            let value=this.a*(Math.pow(this.r,(this.n-1)));
            console.log(value);
        }

        // findnOfGP(2,2,10)

        // Finding sum of n values of a gp

        findSumofGpForValuesGreaterThan1(){
            let sum=(this.a*(Math.pow(this.r,this.n)-1))/(this.r-1);
            console.log(sum);
        }

        // findSumofGpForValuesGreaterThan1(4,3,6)

        findSumofGpForValuesLessThan1(){
            let sum=(this.a*(1-Math.pow(this.r,this.n)))/(1-this.r);
            console.log(sum);
        }

        // Sum of infinite GP
        sumOfInfiniteGp(){
            let sum=this.a/(1-this.r);

            console.log(sum);
        }

        sumOfFirstNaturalNumbers(){
            let sum=(this.n*(this.n+1))/2
            console.log(sum);
        }
        sumOfSquresOfFirstNaturalNumbers(){
            let sum=(this.n*(this.n+1)*(2*this.n+1))/6
            console.log(sum);
        }
        sumOfCubesOfFirstNaturalNumbers(){
            let sum=Math.pow(((this.n*(this.n+1))/2),2)
            console.log(sum);
        }
}

// const calc=new Calcultor(4,null,null,6,3)
// // calc.findSumofGpForValuesGreaterThan1()

// const calc1=new Calcultor(1,null,null,5,(1/2))

// // calc1.findSumofGpForValuesLessThan1();

// const calc2=new Calcultor(1,3,null,148,null)
// // calc2.findTheSum()

// const calc3=new Calcultor(1,null,null,null,(1/7))

// // calc3.sumOfInfiniteGp()
// const calc4=new Calcultor(null,null,null,100,null)
// // calc4.sumOfFirstNaturalNumbers()

// const calc5=new Calcultor(null,null,null,50,null)

// // calc5.sumOfSquresOfFirstNaturalNumbers()


const calc6=new Calcultor(1,3,148,442,4)
// calc6.sumOfSquresOfFirstNaturalNumbers()


for(let i=0; i<10; i++){
    console.log("This outer loop "+i);
    outerloop:
    if(i===8){
        break outerloop
        }else{
            innerloop:
            for(let j=0; j<8; j++){
                if(j==5){
                    break innerloop
                }else{
                    console.log("Inner loop "+j);
                }
            }
        }
    }


