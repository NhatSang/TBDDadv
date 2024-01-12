export class Triangle{
    private a:number;
    private b:number;
    private c:number;

    constructor (a:number,b:number,c:number){
        if(a<0 || b<0 || c<0 || !(a+b>c && a+c>b && b+c>a)){
            this.a=0;
            this.b=0;
            this.c=0;
        }
        else{
            this.a=a;
            this.b=b;
            this.c=c;
        }        
    }

    get getA():number{
        return this.a;
    }

    set setA(a:number){
        if (!(a<0 || a+this.b<this.c || a+this.c<this.b )){
            this.a=a
        }
    }
    get getB():number{
        return this.b;
    }

    set setB(b:number){
        if (!(b<0 || b+this.a<this.c || b+this.c<this.a )){
            this.b=b
        }
    }
    get getC():number{
        return this.c;
    }

    set setC(c:number){
        if (!(c<0 || c+this.b<this.a || c+this.a<this.b )){
            this.c=c;
        }
    }

    public PTriangle():number{
        return this.a+this.b+this.c;
    }

    public areaTriangle():number{
        let p = this.PTriangle()/2;
        return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
    }

    public checkTriangle():string{
        if(this.a==0 && this.b==0 && this.c==0)
            return "Not triangle";
        if(this.a==this.b && this.a==this.c)
            return "equilateral triangle";
        if(this.a==this.b || this.a==this.c || this.b==this.c)
            return "isosceles triangle";
        return "Normal triangle"
    }

    public toString():string{
        return this.checkTriangle() + " with a = "+this.a+" b = "+this.b+" c = "+this.c
    }
}