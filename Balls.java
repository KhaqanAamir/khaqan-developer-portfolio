import java.awt.*;
import java.util.*;
public class Balls
{
	private int fw,fh;
	private Random ran= new Random();
	private int x,y,diameter=25;
	private int speed=0;
	private float red,green,blue;
	private boolean up=false;
	private boolean right=false;
	
	public Balls(int frameWidth, int frameHeight)
	{
		fw=frameWidth;
		fh=frameHeight;
		x=ran.nextInt(fw-diameter);
		y=ran.nextInt(fh-diameter);
		speed=ran.nextInt(10);
		up=ran.nextBoolean();
		right=ran.nextBoolean();
		red=ran.nextFloat();
		green=ran.nextFloat();
		blue=ran.nextFloat();
		
	}
	public void move()
	{
		if(right)
			x+=speed;
		else
			x-=speed;
		if(up)
			y-=speed;
		else
			y+=speed;
		if(x<0)
			right=true;
		if(x>(fw-diameter))
			right=false;
		if(y<0)
			up=false;
		if(y>(fh-diameter))
			up=true;
	}
	public void draw(Graphics g)
	{
		g.setColor(new Color(red,green,blue));
		g.fillOval(x,y,diameter,diameter);
		
	}
	
	
}