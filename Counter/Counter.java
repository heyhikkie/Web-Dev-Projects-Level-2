import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Counter1 extends JFrame implements ActionListener
{
	JDialog d1;
	JTextArea t1;  
	JButton jb1,jb2; 
	Counter1()
	{
		JLabel bg=new JLabel(new ImageIcon("C:/Users/Atharv/Desktop/AJP/Micro-Project/wordcounter.png"));
		add(bg);
		bg.setLayout(new FlowLayout());
		
		bg.setLayout(null);
		JLabel L1 =new JLabel("***Word and Character Counter***",JLabel.CENTER);
		L1.setForeground(Color.red);
		Font f1=new Font("Arial Black",Font.BOLD|Font.ITALIC,30);
		Font f2=new Font("Times New Roman",Font.ITALIC|Font.BOLD,20);
		L1.setFont(f1);
		L1.setBounds(45,100,700,40);
		bg.add(L1);
		JButton b2=new JButton("Go to Counter");
		b2.setBackground(Color.DARK_GRAY);
		b2.setFont(f2);
		b2.setForeground(Color.white);
		b2.setBounds(300,530,200,30);
		bg.add(b2);
		b2.addActionListener(this);
		
		// Dialog Class
		d1=new JDialog(this,"Word Counter*",true);			
		t1 = new JTextArea();		
		int v=ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED;
		int h=ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED;
		
		JScrollPane jsp=new JScrollPane(t1,v,h);
		jsp.setBounds(60,50,400,250);
		d1.add(jsp);
		
		jb1=new JButton("Count Word");  
		jb1.setBounds(80,350,150,30); 
		jb1.addActionListener(this);  
		
		jb2=new JButton("Count Character");  
		jb2.setBounds(240,350,150,30); 
		jb2.addActionListener(this);
		
		d1.add(jb1); 
		d1.add(jb2); 
		d1.setLayout(null);
		
		d1.setSize(550,500);
	}
	public void actionPerformed(ActionEvent e)
	{
		String text=t1.getText();  
		if(e.getSource()==jb1)
		{  
			String words[]=text.split("\\s");  
			JOptionPane.showMessageDialog(this,"Total words: "+words.length);  
		}  
		if(e.getSource()==jb2)
		{  
			JOptionPane.showMessageDialog(this,"Total Characters with space: "+text.length());  
		} 
		d1.setVisible(true);
	}
	public static void main(String args[])
	{
			Counter1 jdd=new Counter1();
			jdd.setVisible(true);
			jdd.setTitle("Word Counter");
			jdd.setSize(800,700);
			jdd.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
}
