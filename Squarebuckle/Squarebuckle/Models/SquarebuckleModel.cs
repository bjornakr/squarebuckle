namespace Squarebuckle.Models
{
    public class SquarebuckleModel
    {
        private string _square = "Squarebuckle from model!";
        public string Square
        {
            get
            {
                return _square;
            }
            set
            {
                _square = value;
            }
        }
        
    }
}