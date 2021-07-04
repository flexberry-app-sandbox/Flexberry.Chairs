﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Chairs
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Chair.
    /// </summary>
    //  *** Start programmer edit section *** (Chair CustomAttributes)

    //  *** End programmer edit section *** (Chair CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ChairE", new string[] {
            "SerialNumber as \'Serial number\'",
            "ChairType as \'Chair type\'",
            "ChairType.Name as \'Name\'"}, Hidden=new string[] {
            "ChairType.Name"})]
    [AssociatedDetailViewAttribute("ChairE", "ChairLeg", "ChairLegE", true, "", "Chair leg", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ChairE", "ChairType", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("ChairL", new string[] {
            "SerialNumber as \'Serial number\'",
            "ChairType.Name as \'Name\'"})]
    public class Chair : ICSSoft.STORMNET.DataObject
    {
        
        private string fSerialNumber;
        
        private IIS.Chairs.ChairType fChairType;
        
        private IIS.Chairs.DetailArrayOfChairLeg fChairLeg;
        
        //  *** Start programmer edit section *** (Chair CustomMembers)

        //  *** End programmer edit section *** (Chair CustomMembers)

        
        /// <summary>
        /// SerialNumber.
        /// </summary>
        //  *** Start programmer edit section *** (Chair.SerialNumber CustomAttributes)

        //  *** End programmer edit section *** (Chair.SerialNumber CustomAttributes)
        [StrLen(255)]
        public virtual string SerialNumber
        {
            get
            {
                //  *** Start programmer edit section *** (Chair.SerialNumber Get start)

                //  *** End programmer edit section *** (Chair.SerialNumber Get start)
                string result = this.fSerialNumber;
                //  *** Start programmer edit section *** (Chair.SerialNumber Get end)

                //  *** End programmer edit section *** (Chair.SerialNumber Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Chair.SerialNumber Set start)

                //  *** End programmer edit section *** (Chair.SerialNumber Set start)
                this.fSerialNumber = value;
                //  *** Start programmer edit section *** (Chair.SerialNumber Set end)

                //  *** End programmer edit section *** (Chair.SerialNumber Set end)
            }
        }
        
        /// <summary>
        /// Chair.
        /// </summary>
        //  *** Start programmer edit section *** (Chair.ChairType CustomAttributes)

        //  *** End programmer edit section *** (Chair.ChairType CustomAttributes)
        public virtual IIS.Chairs.ChairType ChairType
        {
            get
            {
                //  *** Start programmer edit section *** (Chair.ChairType Get start)

                //  *** End programmer edit section *** (Chair.ChairType Get start)
                IIS.Chairs.ChairType result = this.fChairType;
                //  *** Start programmer edit section *** (Chair.ChairType Get end)

                //  *** End programmer edit section *** (Chair.ChairType Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Chair.ChairType Set start)

                //  *** End programmer edit section *** (Chair.ChairType Set start)
                this.fChairType = value;
                //  *** Start programmer edit section *** (Chair.ChairType Set end)

                //  *** End programmer edit section *** (Chair.ChairType Set end)
            }
        }
        
        /// <summary>
        /// Chair.
        /// </summary>
        //  *** Start programmer edit section *** (Chair.ChairLeg CustomAttributes)

        //  *** End programmer edit section *** (Chair.ChairLeg CustomAttributes)
        public virtual IIS.Chairs.DetailArrayOfChairLeg ChairLeg
        {
            get
            {
                //  *** Start programmer edit section *** (Chair.ChairLeg Get start)

                //  *** End programmer edit section *** (Chair.ChairLeg Get start)
                if ((this.fChairLeg == null))
                {
                    this.fChairLeg = new IIS.Chairs.DetailArrayOfChairLeg(this);
                }
                IIS.Chairs.DetailArrayOfChairLeg result = this.fChairLeg;
                //  *** Start programmer edit section *** (Chair.ChairLeg Get end)

                //  *** End programmer edit section *** (Chair.ChairLeg Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Chair.ChairLeg Set start)

                //  *** End programmer edit section *** (Chair.ChairLeg Set start)
                this.fChairLeg = value;
                //  *** Start programmer edit section *** (Chair.ChairLeg Set end)

                //  *** End programmer edit section *** (Chair.ChairLeg Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ChairE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ChairE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ChairE", typeof(IIS.Chairs.Chair));
                }
            }
            
            /// <summary>
            /// "ChairL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ChairL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ChairL", typeof(IIS.Chairs.Chair));
                }
            }
        }
    }
}
