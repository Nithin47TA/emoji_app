export default function Detail(parm){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {parm.emoji}
            </span>
            <span>{parm.name}</span>
          </dt>
          <dd>
           {parm.meaning}
          </dd>
        </div>
    );
}