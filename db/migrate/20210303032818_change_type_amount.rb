class ChangeTypeAmount < ActiveRecord::Migration[6.0]
  def up
    change_table :prices do |t|
      t.change :amount, :decimal
    end
  end

  def down
    change_table :price do |t|
      t.change :amount, :integer
    end
  end
end
